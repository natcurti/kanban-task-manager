"use client";
import { useAppSelector } from "@/store/hooks";
import styles from "./MainContainer.module.scss";
import classNames from "classnames";
import Modal from "../Modal";
import TaskCover from "../TaskCover";
import InputName from "../ModalComponents/InputName";
import SelectStatus from "../ModalComponents/SelectStatus";

interface IMainContainer {
  children: React.ReactNode;
}

const MainContainer = ({ children }: IMainContainer) => {
  const { theme, isModalOpen } = useAppSelector((store) => {
    return {
      theme: store.colorMode,
      isModalOpen: store.modal,
    };
  });

  return (
    <main
      className={classNames(styles.main, {
        [styles.light]: theme.colorMode === "light",
      })}
    >
      {children}
      {isModalOpen && (
        <Modal title="Task Details">
          <TaskCover />
          <InputName title="Task Name" placeholder="Task name here" />
          <SelectStatus title="Status" />
        </Modal>
      )}
    </main>
  );
};

export default MainContainer;
