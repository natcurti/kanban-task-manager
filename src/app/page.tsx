import AddNewTask from "@/components/AddNewTask";
import MainContainer from "@/components/MainContainer";
import Status from "@/components/Status";
import styles from "./Home.module.scss";

export default function Home() {
  return (
    <MainContainer>
      <div className={styles["tasks-container"]}>
        <Status title="Backlog" quantity={0} />
        <Status title="In Progress" quantity={0} />
        <Status title="In Review" quantity={0} />
        <Status title="Completed" quantity={0} />
      </div>
      <div>
        <AddNewTask />
      </div>
    </MainContainer>
  );
}
