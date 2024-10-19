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
import { setModalOpen } from "@/store/reducers/modal";
import { addTask } from "@/store/reducers/tasks";
import { createSelector } from "@reduxjs/toolkit";

interface IMainContainer {
  children: React.ReactNode;
}

const MainContainer = ({ children }: IMainContainer) => {
  // const { theme, isModalOpen } = useAppSelector((store) => {
  //   return {
  //     theme: store.colorMode,
  //     isModalOpen: store.modal,
  //   };
  // });

  const { theme, isModalOpen } = useAppSelector(
    createSelector(
      (store) => store,
      (store) => ({
        theme: store.colorMode,
        isModalOpen: store.modal,
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

    dispatch(setModalOpen());
  };

  const cancelTask = () => {
    dispatch(setModalOpen());
  };

  return (
    <main
      className={classNames(styles.main, {
        [styles.light]: theme.colorMode === "light",
      })}
    >
      {children}
      {isModalOpen && (
        <Modal title="Task Details">
          <TaskCover urlCover={urlCover} setUrlCover={setUrlCover} />
          <InputName
            title="Task Name"
            placeholder="Task name here"
            taskName={taskName}
            setTaskName={setTaskName}
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
