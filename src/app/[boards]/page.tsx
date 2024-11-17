"use client";
import MainContainer from "@/components/MainContainer";
import styles from "./Boards.module.scss";
import BacklogSection from "@/components/Sections/BacklogSection";
import CompletedSection from "@/components/Sections/CompletedSection";
import ReviewSection from "@/components/Sections/ReviewSection";
import ProgressSection from "@/components/Sections/ProgressSection";
import { useAppSelector } from "@/store/hooks";
import { createSelector } from "@reduxjs/toolkit";
import { IBoard } from "@/types/IBoard";
import Sidebar from "@/components/Sidebar";
import useGetTasksAndBoards from "@/hooks/useGetTasksAndBoards";
import Loader from "@/components/Loader";

interface IBoardParams {
  params: {
    boards: string;
  };
}

export default function Board({ params }: IBoardParams) {
  const { isLoading } = useGetTasksAndBoards();

  const { activeBoard } = useAppSelector(
    createSelector(
      (store) => store,
      (store) => ({
        activeBoard: store.boards.filter(
          (board: IBoard) => board.slug === params.boards
        ),
      })
    )
  );

  return (
    <>
      {isLoading && <Loader />}
      {activeBoard.length > 0 && (
        <div className={styles["main-container"]}>
          <Sidebar />
          <MainContainer>
            <section className={styles["tasks-container"]}>
              <BacklogSection boardId={activeBoard[0].id} />
              <ProgressSection boardId={activeBoard[0].id} />
              <ReviewSection boardId={activeBoard[0].id} />
              <CompletedSection boardId={activeBoard[0].id} />
            </section>
          </MainContainer>
        </div>
      )}
    </>
  );
}
