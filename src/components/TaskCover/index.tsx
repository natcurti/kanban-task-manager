"use client";
import { getImage } from "@/actions/getImage";
import styles from "./TaskCover.module.scss";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useAppSelector } from "@/store/hooks";
import classNames from "classnames";

interface ITaskCover {
  urlCover: string;
  setUrlCover: React.Dispatch<React.SetStateAction<string>>;
}

const TaskCover = ({ urlCover, setUrlCover }: ITaskCover) => {
  const [getCover, setGetCover] = useState(false);
  const theme = useAppSelector((store) => store.colorMode);

  useEffect(() => {
    const coverImg = async () => {
      const linkImage = await getImage();
      if (linkImage) {
        setUrlCover(linkImage);
      }
    };

    if (getCover) {
      coverImg();
      setGetCover(false);
    }
  }, [getCover, setUrlCover]);

  const removeCover = () => {
    setUrlCover("");
  };

  return (
    <div
      className={classNames(styles.cover, {
        [styles["cover-light"]]: theme.colorMode === "light",
      })}
    >
      {urlCover && (
        <Image src={urlCover} alt="Task Cover Random Image" fill={true} />
      )}
      <div className={styles["container-buttons"]}>
        <button
          className={`${styles.btn} ${styles.random}`}
          onClick={() => setGetCover(true)}
        >
          Random Cover
        </button>
        <button
          className={`${styles.btn} ${styles.remove}`}
          onClick={removeCover}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default TaskCover;
