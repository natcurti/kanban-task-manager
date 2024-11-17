import { defaultBoard } from "@/store/defaultBoard";
import { defaultTasks } from "@/store/defaultTasks";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { loadInitialBoards } from "@/store/reducers/boards";
import { setBoardsLoaded, setTasksLoaded } from "@/store/reducers/dataLoaded";
import { loadInitialTasks } from "@/store/reducers/tasks";
import { LocalStorage } from "@/utils/LocalStorage";
import { createSelector } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";

const useGetTasksAndBoards = () => {
  const [isLoading, setIsLoading] = useState(true);

  const { dataLoaded, boards } = useAppSelector(
    createSelector(
      (store) => store,
      (store) => ({
        dataLoaded: store.dataLoaded,
        boards: store.boards,
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
  }, [dispatch, dataLoaded.tasksLoaded]);

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
  }, [dispatch, dataLoaded.boardsLoaded]);

  useEffect(() => {
    if (dataLoaded.boardsLoaded && dataLoaded.tasksLoaded) {
      setIsLoading(false);
    }
  }, [dataLoaded]);

  return {
    isLoading,
    boards,
  };
};

export default useGetTasksAndBoards;
