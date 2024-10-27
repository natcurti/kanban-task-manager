import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { createSelector } from "@reduxjs/toolkit";
import { ITask } from "@/types/ITask";
import Task from "../../Task";
import styles from "../Sections.module.scss";
import Status from "@/components/Status";
import { dropTask } from "@/store/reducers/tasks";
import { cleanSelectTask } from "@/store/reducers/selectedTask";
import { useState } from "react";
import classNames from "classnames";

const CompletedSection = ({ boardId }: { boardId: string }) => {
  const [isUserDragging, setIsUserDragging] = useState(false);
  const { activeBoardTasks, selectedTask } = useAppSelector(
    createSelector(
      (store) => store,
      (store) => ({
        activeBoardTasks: store.tasks.filter(
          (task: ITask) =>
            task.boardId === boardId && task.status === "Completed"
        ),
        selectedTask: store.selectedTask,
      })
    )
  );

  const dispatch = useAppDispatch();

  const handleDragOver = (e: React.DragEvent<HTMLElement>) => {
    e.preventDefault();
    setIsUserDragging(true);
  };

  const handleDropTask = () => {
    dispatch(
      dropTask({
        task: selectedTask,
        section: "Completed",
      })
    );
    dispatch(cleanSelectTask());
    setIsUserDragging(false);
  };

  return (
    <section
      onDragOver={handleDragOver}
      onDrop={handleDropTask}
      onDragLeave={() => setIsUserDragging(false)}
      className={classNames({
        [styles.dragging]: isUserDragging,
      })}
    >
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
