"use client";
import { getImage } from "@/actions/getImage";
import styles from "./TaskCover.module.scss";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useAppSelector } from "@/store/hooks";
import classNames from "classnames";
import { createSelector } from "@reduxjs/toolkit";

interface ITaskCover {
  urlCover: string;
  setUrlCover: React.Dispatch<React.SetStateAction<string>>;
}

const TaskCover = ({ urlCover, setUrlCover }: ITaskCover) => {
  const [getCover, setGetCover] = useState(false);
  const { taskToEdit, theme } = useAppSelector(
    createSelector(
      (store) => store,
      (store) => ({
        taskToEdit: store.taskToEdit,
        theme: store.colorMode,
      })
    )
  );

  useEffect(() => {
    if (taskToEdit.length > 0) {
      setUrlCover(taskToEdit[0].cover);
    } else {
      setUrlCover("");
    }
  }, [taskToEdit, setUrlCover]);

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
        <Image
          src={urlCover}
          alt="Task Cover Random Image"
          fill={true}
          priority
        />
      )}
      <div className={styles["container-buttons"]}>
        <button
          type="button"
          className={`${styles.btn} ${styles.random}`}
          onClick={() => setGetCover(true)}
        >
          Random Cover
        </button>
        <button
          className={`${styles.btn} ${styles.remove}`}
          onClick={removeCover}
          type="button"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default TaskCover;
