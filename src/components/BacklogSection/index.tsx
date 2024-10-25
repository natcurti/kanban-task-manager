import { useAppSelector } from "@/store/hooks";
import Status from "../Status";
import { createSelector } from "@reduxjs/toolkit";
import { ITask } from "@/types/ITask";
import Task from "../Task";

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

  console.log(activeBoardTasks);

  return (
    <section>
      <Status title="Backlog" quantity={0} />
      {activeBoardTasks.map((task: ITask) => (
        <Task key={task.name} {...task} />
      ))}
    </section>
  );
};

export default BacklogSection;
