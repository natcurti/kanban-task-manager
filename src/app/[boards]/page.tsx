"use client";
import AddNewTask from "@/components/AddNewTask";
import MainContainer from "@/components/MainContainer";
import styles from "./Boards.module.scss";
import BacklogSection from "@/components/BacklogSection";
import CompletedSection from "@/components/CompletedSection";
import ReviewSection from "@/components/ReviewSection";
import ProgressSection from "@/components/ProgressSection";
import { useAppSelector } from "@/store/hooks";
import { createSelector } from "@reduxjs/toolkit";
import { IBoard } from "@/types/IBoard";

interface IBoardParams {
  params: {
    boards: string;
  };
}

export default function Board({ params }: IBoardParams) {
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
    <MainContainer>
      <section className={styles["tasks-container"]}>
        <BacklogSection boardId={activeBoard[0].id} />
        <ProgressSection />
        <ReviewSection />
        <CompletedSection />
      </section>
      <div>
        <AddNewTask />
      </div>
    </MainContainer>
  );
}
