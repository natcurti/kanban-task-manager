import { useAppSelector } from "@/store/hooks";
import { createSelector } from "@reduxjs/toolkit";
import { ITask } from "@/types/ITask";
import Task from "../../Task";
import styles from "../Sections.module.scss";
import Status from "@/components/Status";

const ProgressSection = ({ boardId }: { boardId: string }) => {
  const { activeBoardTasks } = useAppSelector(
    createSelector(
      (store) => store,
      (store) => ({
        activeBoardTasks: store.tasks.filter(
          (task: ITask) =>
            task.boardId === boardId && task.status === "In Progress"
        ),
      })
    )
  );

  return (
    <section>
      <Status title="In Progress" quantity={activeBoardTasks.length} />
      <div className={styles["container-tasks"]}>
        {activeBoardTasks.map((task: ITask) => (
          <Task key={task.name} {...task} />
        ))}
      </div>
    </section>
  );
};

export default ProgressSection;
