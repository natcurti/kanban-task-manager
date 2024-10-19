"use client";
import { getImage } from "@/actions/getImage";
import styles from "./TaskCover.module.scss";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useAppSelector } from "@/store/hooks";
import classNames from "classnames";

const TaskCover = () => {
  const [getCover, setGetCover] = useState(false);
  const [url, setUrl] = useState("");
  const theme = useAppSelector((store) => store.colorMode);

  useEffect(() => {
    const coverImg = async () => {
      const linkImage = await getImage();
      if (linkImage) {
        setUrl(linkImage);
      }
    };

    if (getCover) {
      coverImg();
      setGetCover(false);
    }
  }, [getCover]);

  const removeCover = () => {
    setUrl("");
  };

  return (
    <div
      className={classNames(styles.cover, {
        [styles["cover-light"]]: theme.colorMode === "light",
      })}
    >
      {url && <Image src={url} alt="Task Cover Random Image" fill={true} />}
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
