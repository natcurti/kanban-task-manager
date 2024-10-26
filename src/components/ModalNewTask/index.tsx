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
import { useAppDispatch } from "@/store/hooks";
import { addTask } from "@/store/reducers/tasks";
import ErrorMessage from "../ErrorMessage";

const statusOptions = ["Backlog", "In Progress", "In Review", "Completed"];
const tagsOptions = ["concept", "technical", "design", "front-end"];

const schema = z.object({
  taskName: z.string().min(3, "Digite um nome válido"),
  selectStatus: z.string().min(1, "Campo obrigatório"),
  selectTags: z.string().array().nonempty("Escolha ao menos uma tag"),
});

export type ModalValues = z.infer<typeof schema>;

const ModalNewTask = ({ boardId }: { boardId: string }) => {
  const [urlCover, setUrlCover] = useState("");
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm<ModalValues>({
    defaultValues: {
      taskName: "",
      selectStatus: "",
      selectTags: [],
    },
    mode: "onSubmit",
    resolver: zodResolver(schema),
  });

  const handleNewTask = (values: ModalValues) => {
    dispatch(
      addTask({
        cover: urlCover,
        name: values.taskName,
        status: values.selectStatus,
        tags: values.selectTags,
        boardId: boardId,
      })
    );
    dispatch(setModalTaskOpen());
  };

  const cancelTask = () => {
    dispatch(setModalTaskOpen());
    reset();
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
          <Button title="Save" btnStyle={ButtonType.save} type="submit" />
          <Button
            title="Cancel"
            btnStyle={ButtonType.cancel}
            type="button"
            onClick={cancelTask}
          />
        </div>
      </form>
    </Modal>
  );
};

export default ModalNewTask;
