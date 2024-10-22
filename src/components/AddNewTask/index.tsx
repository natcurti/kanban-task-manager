"use client";
import { useAppDispatch } from "@/store/hooks";
import { AddTaskIcon } from "../Icons";
import styles from "./AddNewTask.module.scss";
import { setModalTaskOpen } from "@/store/reducers/modalTask";

const AddNewTask = () => {
  const dispatch = useAppDispatch();

  return (
    <button
      className={styles["btn-add-task"]}
      onClick={() => dispatch(setModalTaskOpen())}
    >
      Add new task card
      <span className={styles.icon}>
        <AddTaskIcon />
      </span>
    </button>
  );
};

export default AddNewTask;
