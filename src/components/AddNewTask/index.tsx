"use client";
import { useAppDispatch } from "@/store/hooks";
import { AddTaskIcon } from "../Icons";
import styles from "./AddNewTask.module.scss";
import { setModalOpen } from "@/store/reducers/modal";

const AddNewTask = () => {
  const dispatch = useAppDispatch();

  return (
    <button
      className={styles["btn-add-task"]}
      onClick={() => dispatch(setModalOpen())}
    >
      Add new task card
      <span className={styles.icon}>
        <AddTaskIcon />
      </span>
    </button>
  );
};

export default AddNewTask;
