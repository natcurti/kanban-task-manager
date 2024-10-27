import { ITask } from "@/types/ITask";
import Tag from "../Tag";
import { v4 as uuidv4 } from "uuid";
import styles from "./Task.module.scss";
import Image from "next/image";

const Task = ({ ...task }: ITask) => {
  return (
    <div className={styles.container}>
      {task.cover && (
        <div className={styles.cover}>
          <Image
            src={task.cover}
            alt={`Imagem relacionada à tarefa ${task.name}`}
            width={200}
            height={80}
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
