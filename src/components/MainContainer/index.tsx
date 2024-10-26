"use client";
import { useAppSelector } from "@/store/hooks";
import styles from "./MainContainer.module.scss";
import classNames from "classnames";
import { createSelector } from "@reduxjs/toolkit";
import ModalNewTask from "../ModalNewTask";
import { usePathname } from "next/navigation";
import { IBoard } from "@/types/IBoard";

interface IMainContainer {
  children: React.ReactNode;
}

const MainContainer = ({ children }: IMainContainer) => {
  const pathname = usePathname().replace("/", "");

  const { theme, isModalOpen, activeBoard } = useAppSelector(
    createSelector(
      (store) => store,
      (store) => ({
        theme: store.colorMode,
        isModalOpen: store.modalTask,
        activeBoard: store.boards.filter(
          (board: IBoard) => board.slug === pathname
        ),
      })
    )
  );

  return (
    <main
      className={classNames(styles.main, {
        [styles.light]: theme.colorMode === "light",
      })}
    >
      {children}
      {isModalOpen && <ModalNewTask boardId={activeBoard[0].id} />}
    </main>
  );
};

export default MainContainer;
