"use client";
import { ITask } from "@/types/ITask";
import Tag from "../Tag";
import { v4 as uuidv4 } from "uuid";
import styles from "./Task.module.scss";
import Image from "next/image";
import { useAppSelector } from "@/store/hooks";
import classNames from "classnames";

const Task = ({ ...task }: ITask) => {
  const theme = useAppSelector((store) => store.colorMode);

  return (
    <div
      className={classNames(styles.container, {
        [styles["container-light"]]: theme.colorMode === "light",
      })}
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
      <div className={styles["container-tags"]}>
        {task.tags.map((tag) => (
          <Tag key={uuidv4()} size="small" title={tag} />
        ))}
      </div>
    </div>
  );
};

export default Task;
