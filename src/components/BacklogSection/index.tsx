import { useAppSelector } from "@/store/hooks";
import Status from "../Status";
import { createSelector } from "@reduxjs/toolkit";
import { ITask } from "@/types/ITask";
import Task from "../Task";
import styles from "./BacklogSection.module.scss";

const BacklogSection = ({ boardId }: { boardId: string }) => {
  const { activeBoardTasks } = useAppSelector(
    createSelector(
      (store) => store,
      (store) => ({
        activeBoardTasks: store.tasks.filter(
          (task: ITask) => task.boardId === boardId && task.status === "Backlog"
        ),
      })
    )
  );

  return (
    <section>
      <Status title="Backlog" quantity={activeBoardTasks.length} />
      <div className={styles["container-tasks"]}>
        {activeBoardTasks.map((task: ITask) => (
          <Task key={task.name} {...task} />
        ))}
      </div>
    </section>
  );
};

export default BacklogSection;
