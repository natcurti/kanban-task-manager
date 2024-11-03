"use client";
import MainContainer from "@/components/MainContainer";
import styles from "./Boards.module.scss";
import BacklogSection from "@/components/Sections/BacklogSection";
import CompletedSection from "@/components/Sections/CompletedSection";
import ReviewSection from "@/components/Sections/ReviewSection";
import ProgressSection from "@/components/Sections/ProgressSection";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { createSelector } from "@reduxjs/toolkit";
import { IBoard } from "@/types/IBoard";
import { useEffect, useMemo, useState } from "react";
import { LocalStorage } from "@/utils/LocalStorage";
import { loadInitialTasks } from "@/store/reducers/tasks";
import { defaultTasks } from "@/store/defaultTasks";
import Loader from "@/components/Loader";

interface IBoardParams {
  params: {
    boards: string;
  };
}

export default function Board({ params }: IBoardParams) {
  const [isLoading, setIsLoading] = useState(true);

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
  const dispatch = useAppDispatch();

  const getTasks = useMemo(() => {
    const tasks = LocalStorage.getItemFromStorage("tasks");
    if (tasks) {
      const parsedTasks = JSON.parse(tasks);
      dispatch(loadInitialTasks(parsedTasks));
    } else {
      dispatch(loadInitialTasks(defaultTasks));
    }
  }, [dispatch]);

  useEffect(() => {
    setIsLoading(false);
  }, [getTasks]);

  return (
    <MainContainer>
      {isLoading ? (
        <div className={styles["container-loader"]}>
          <Loader />
        </div>
      ) : (
        <section className={styles["tasks-container"]}>
          <BacklogSection boardId={activeBoard[0].id} />
          <ProgressSection boardId={activeBoard[0].id} />
          <ReviewSection boardId={activeBoard[0].id} />
          <CompletedSection boardId={activeBoard[0].id} />
        </section>
      )}
    </MainContainer>
  );
}
