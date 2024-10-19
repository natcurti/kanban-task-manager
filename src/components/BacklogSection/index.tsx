import { useAppSelector } from "@/store/hooks";
import Status from "../Status";
import { createSelector } from "@reduxjs/toolkit";

const BacklogSection = () => {
  const { tasks } = useAppSelector(
    createSelector(
      (store) => store,
      (store) => ({
        tasks: store.tasks,
      })
    )
  );

  console.log(tasks);

  return (
    <section>
      <Status title="Backlog" quantity={0} />
    </section>
  );
};

export default BacklogSection;
