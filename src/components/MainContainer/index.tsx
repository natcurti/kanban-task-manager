"use client";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import styles from "./MainContainer.module.scss";
import classNames from "classnames";
import Modal from "../Modal";
import TaskCover from "../TaskCover";
import InputName from "../ModalComponents/InputName";
import SelectStatus from "../ModalComponents/SelectStatus";
import SelectTags from "../ModalComponents/SelectTags";
import { useState } from "react";
import Button from "../Button";
import { ButtonType } from "@/types/buttonType";
import { addTask } from "@/store/reducers/tasks";
import { createSelector } from "@reduxjs/toolkit";
import { setModalTaskOpen } from "@/store/reducers/modalTask";
import { ModalType } from "@/types/modalType";

interface IMainContainer {
  children: React.ReactNode;
}

const MainContainer = ({ children }: IMainContainer) => {
  const { theme, isModalOpen } = useAppSelector(
    createSelector(
      (store) => store,
      (store) => ({
        theme: store.colorMode,
        isModalOpen: store.modalTask,
      })
    )
  );

  const dispatch = useAppDispatch();

  const [urlCover, setUrlCover] = useState("");
  const [taskName, setTaskName] = useState("");
  const [status, setStatus] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const handleSaveTask = () => {
    dispatch(
      addTask({
        urlCover,
        taskName,
        status,
        selectedTags,
      })
    );

    dispatch(setModalTaskOpen());
    setUrlCover("");
    setTaskName("");
    setStatus("");
    setSelectedTags([]);
  };

  const cancelTask = () => {
    dispatch(setModalTaskOpen());
  };

  return (
    <main
      className={classNames(styles.main, {
        [styles.light]: theme.colorMode === "light",
      })}
    >
      {children}
      {isModalOpen && (
        <Modal title="Task Details" type={ModalType.newTask}>
          <TaskCover urlCover={urlCover} setUrlCover={setUrlCover} />
          <InputName
            title="Task Name"
            placeholder="Task name here"
            name={taskName}
            setName={setTaskName}
          />
          <SelectStatus status={status} setStatus={setStatus} />
          <SelectTags
            selectedTags={selectedTags}
            setSelectedTags={setSelectedTags}
          />
          <div className={styles["container-buttons"]}>
            <Button
              title="Save"
              type={ButtonType.save}
              onClick={handleSaveTask}
            />
            <Button
              title="Cancel"
              type={ButtonType.cancel}
              onClick={cancelTask}
            />
          </div>
        </Modal>
      )}
    </main>
  );
};

export default MainContainer;
