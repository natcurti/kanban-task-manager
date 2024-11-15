"use client";
import MainContainer from "@/components/MainContainer";
import styles from "./Boards.module.scss";
import BacklogSection from "@/components/Sections/BacklogSection";
import CompletedSection from "@/components/Sections/CompletedSection";
import ReviewSection from "@/components/Sections/ReviewSection";
import ProgressSection from "@/components/Sections/ProgressSection";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { createSelector } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";
import { LocalStorage } from "@/utils/LocalStorage";
import { loadInitialTasks } from "@/store/reducers/tasks";
import { defaultTasks } from "@/store/defaultTasks";
import Loader from "@/components/Loader";
import { defaultBoard } from "@/store/defaultBoard";
import { loadInitialBoards } from "@/store/reducers/boards";
import { IBoard } from "@/types/IBoard";
import { setBoardsLoaded, setTasksLoaded } from "@/store/reducers/dataLoaded";
import Sidebar from "@/components/Sidebar";

interface IBoardParams {
  params: {
    boards: string;
  };
}

export default function Board({ params }: IBoardParams) {
  const [isLoading, setIsLoading] = useState(true);

  const { activeBoard, dataLoaded } = useAppSelector(
    createSelector(
      (store) => store,
      (store) => ({
        activeBoard: store.boards.filter(
          (board: IBoard) => board.slug === params.boards
        ),
        dataLoaded: store.dataLoaded,
      })
    )
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!dataLoaded.tasksLoaded) {
      const tasks = LocalStorage.getItemFromStorage("tasks");
      if (tasks) {
        const parsedTasks = JSON.parse(tasks);
        dispatch(loadInitialTasks(parsedTasks));
      } else {
        dispatch(loadInitialTasks(defaultTasks));
      }
      dispatch(setTasksLoaded());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!dataLoaded.boardsLoaded) {
      const boards = LocalStorage.getItemFromStorage("boards");
      if (boards) {
        const parsedBoards = JSON.parse(boards);
        dispatch(loadInitialBoards(parsedBoards));
      } else {
        dispatch(loadInitialBoards(defaultBoard));
      }
      dispatch(setBoardsLoaded());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (dataLoaded.boardsLoaded && dataLoaded.tasksLoaded) {
      setIsLoading(false);
    }
  }, [dataLoaded]);

  return (
    <>
      {isLoading ? (
        <div className={styles["container-loader"]}>
          <Loader />
        </div>
      ) : (
        <div>
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
