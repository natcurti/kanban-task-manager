"use client";
import { useAppSelector } from "@/store/hooks";
import styles from "./MainContainer.module.scss";
import classNames from "classnames";
import Modal from "../Modal";
import TaskCover from "../TaskCover";

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
        </Modal>
      )}
    </main>
  );
};

export default MainContainer;
