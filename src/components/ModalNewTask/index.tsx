"use client";
import { ModalType } from "@/types/ModalType";
import Modal from "../Modal";
import styles from "./ModalNewTask.module.scss";
import TaskCover from "../TaskCover";
import InputName from "../ModalComponents/InputName";
import SelectStatus from "../ModalComponents/SelectStatus";
import SelectTags from "../ModalComponents/SelectTags";
import Button from "../Button";
import { ButtonType } from "@/types/ButtonType";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { setModalTaskOpen } from "@/store/reducers/modalTask";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { addTask, deleteTask, updateTask } from "@/store/reducers/tasks";
import ErrorMessage from "../ErrorMessage";
import { createSelector } from "@reduxjs/toolkit";
import { clearTaskToEdit } from "@/store/reducers/taskToEdit";
import { v4 as uuidv4 } from "uuid";
import { LocalStorage } from "@/utils/LocalStorage";
import { ITask } from "@/types/ITask";

const statusOptions = ["Backlog", "In Progress", "In Review", "Completed"];
const tagsOptions = ["concept", "technical", "design", "front-end"];

const schema = z.object({
  taskName: z.string().min(3, "Digite um nome válido"),
  selectStatus: z.string().min(1, "Campo obrigatório"),
  selectTags: z.string().array().nonempty("Escolha ao menos uma tag"),
});

export type ModalValues = z.infer<typeof schema>;

const ModalNewTask = ({ boardId }: { boardId: string }) => {
  const [tasksOnStorage, setTasksOnStorage] = useState<ITask[]>([]);
  const [urlCover, setUrlCover] = useState("");
  const { taskToEdit } = useAppSelector(
    createSelector(
      (store) => store,
      (store) => ({
        taskToEdit: store.taskToEdit,
      })
    )
  );

  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm<ModalValues>({
    defaultValues: {
      taskName: taskToEdit.length > 0 ? taskToEdit[0].name : "",
      selectStatus: taskToEdit.length > 0 ? taskToEdit[0].status : "",
      selectTags: taskToEdit.length > 0 ? taskToEdit[0].tags : [],
    },
    mode: "onSubmit",
    resolver: zodResolver(schema),
  });

  useEffect(() => {
    const allTasks = LocalStorage.getItemFromStorage("tasks");
    if (allTasks) {
      setTasksOnStorage(JSON.parse(allTasks));
    }
  }, []);

  useEffect(() => {
    LocalStorage.setItemOnStorage("tasks", JSON.stringify(tasksOnStorage));
  }, [tasksOnStorage]);

  console.log(tasksOnStorage);

  const handleNewTask = (values: ModalValues) => {
    const newTask = {
      cover: urlCover,
      name: values.taskName,
      id: taskToEdit.length > 0 ? taskToEdit[0].id : uuidv4(),
      status: values.selectStatus,
      tags: values.selectTags,
      boardId: boardId,
    };

    if (taskToEdit.length > 0) {
      dispatch(updateTask(newTask));
      const taskIndex = tasksOnStorage.findIndex(
        (task) => task.id === newTask.id
      );
      setTasksOnStorage(tasksOnStorage.splice(taskIndex, 1, newTask));
    } else {
      dispatch(addTask(newTask));
      setTasksOnStorage([...tasksOnStorage, newTask]);
    }

    dispatch(setModalTaskOpen());
  };

  const cancelTask = () => {
    if (taskToEdit) {
      dispatch(clearTaskToEdit());
    }
    dispatch(setModalTaskOpen());
    reset();
  };

  const handleDeleteTask = () => {
    if (taskToEdit) {
      dispatch(deleteTask(taskToEdit[0].id));
      dispatch(clearTaskToEdit());
      dispatch(setModalTaskOpen());
      setTasksOnStorage(
        tasksOnStorage.filter((task) => task.id !== taskToEdit[0].id)
      );
      reset();
    }
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <Modal title="Task Details" type={ModalType.newTask}>
      <form onSubmit={handleSubmit(handleNewTask)}>
        <TaskCover urlCover={urlCover} setUrlCover={setUrlCover} />
        <InputName
          title="Task Name"
          placeholder="Task name here"
          name="taskName"
          register={register}
        />
        {errors?.taskName?.message && (
          <ErrorMessage>{errors.taskName.message}</ErrorMessage>
        )}
        <SelectStatus
          name="selectStatus"
          options={statusOptions}
          control={control}
        />
        {errors?.selectStatus?.message && (
          <ErrorMessage>{errors.selectStatus.message}</ErrorMessage>
        )}
        <SelectTags name="selectTags" options={tagsOptions} control={control} />
        {errors?.selectTags?.message && (
          <ErrorMessage>{errors.selectTags.message}</ErrorMessage>
        )}
        <div className={styles["container-buttons"]}>
          <div>
            <Button title="Save" btnStyle={ButtonType.save} type="submit" />
            <Button
              title="Cancel"
              btnStyle={ButtonType.cancel}
              type="button"
              onClick={cancelTask}
            />
          </div>
          <Button
            title="Deletar tarefa"
            btnStyle={ButtonType.delete}
            type="button"
            disabled={taskToEdit.length === 0}
            onClick={handleDeleteTask}
          />
        </div>
      </form>
    </Modal>
  );
};

export default ModalNewTask;
