"use client";
import { ITask } from "@/types/ITask";
import Tag from "../Tag";
import { v4 as uuidv4 } from "uuid";
import styles from "./Task.module.scss";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import classNames from "classnames";
import { selectTask } from "@/store/reducers/selectedTask";
import { createSelector } from "@reduxjs/toolkit";
import { selectTaskToEdit } from "@/store/reducers/taskToEdit";
import { setModalTaskOpen } from "@/store/reducers/modalTask";
import ButtonEdit from "../ButtonEdit";

const Task = ({ ...task }: ITask) => {
  const { theme, selectedTask } = useAppSelector(
    createSelector(
      (store) => store,
      (store) => ({
        theme: store.colorMode,
        selectedTask: store.selectedTask,
      })
    )
  );
  const dispatch = useAppDispatch();

  const handleSelectTask = () => {
    dispatch(selectTask({ ...task }));
  };

  const handleEdit = () => {
    dispatch(selectTaskToEdit(task));
    dispatch(setModalTaskOpen());
  };

  return (
    <div
      className={classNames(styles.container, {
        [styles["container-light"]]: theme.colorMode === "light",
        [styles["selected-task"]]: selectedTask.name === task.name,
      })}
      draggable
      onDragStart={handleSelectTask}
    >
      {task.cover && (
        <div className={styles.cover}>
          <Image
            src={task.cover}
            alt={`Imagem relacionada à tarefa ${task.name}`}
            width={200}
            height={80}
            style={{ width: "100%", height: "4.85rem" }}
            priority
          />
        </div>
      )}
      <p className={styles.title}>{task.name}</p>
      <div className={styles["container-tags-and-btn"]}>
        <div className={styles["container-tags"]}>
          {task.tags.map((tag) => (
            <Tag key={uuidv4()} size="small" title={tag} />
          ))}
        </div>
        <ButtonEdit colorMode={theme.colorMode} onClick={handleEdit} />
      </div>
    </div>
  );
};

export default Task;
