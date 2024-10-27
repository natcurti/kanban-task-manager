import { useAppSelector } from "@/store/hooks";
import { createSelector } from "@reduxjs/toolkit";
import { ITask } from "@/types/ITask";
import Task from "../../Task";
import styles from "../Sections.module.scss";
import Status from "@/components/Status";

const CompletedSection = ({ boardId }: { boardId: string }) => {
  const { activeBoardTasks } = useAppSelector(
    createSelector(
      (store) => store,
      (store) => ({
        activeBoardTasks: store.tasks.filter(
          (task: ITask) =>
            task.boardId === boardId && task.status === "Completed"
        ),
      })
    )
  );

  return (
    <section>
      <Status title="Completed" quantity={activeBoardTasks.length} />
      <div className={styles["container-tasks"]}>
        {activeBoardTasks.length > 0 &&
          activeBoardTasks.map((task: ITask) => (
            <Task key={task.name} {...task} />
          ))}
      </div>
    </section>
  );
};

export default CompletedSection;
