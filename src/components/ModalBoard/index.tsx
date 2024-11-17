"use client";
import { ModalType } from "@/types/modalType";
import Modal from "../Modal";
import InputName from "../ModalComponents/InputName";
import BoardLogo from "../BoardLogo";
import Button from "../Button";
import styles from "./ModalBoard.module.scss";
import { ButtonType } from "@/types/buttonType";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setModalBoardOpen } from "@/store/reducers/modalBoard";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import ErrorMessage from "../ErrorMessage";
import { useEffect, useState } from "react";
import { addBoard, deleteBoard, updateBoard } from "@/store/reducers/boards";
import { v4 as uuidv4 } from "uuid";
import { createSlug } from "@/utils/createSlug";
import { createSelector } from "@reduxjs/toolkit";
import { clearBoardToEdit } from "@/store/reducers/boardToEdit";
import { useRouter } from "next/navigation";

const logos = [
  {
    color: "#F8D8B0",
    src: "/assets/books.png",
    id: "1",
  },
  {
    color: "#C4DAFB",
    src: "/assets/clock.png",
    id: "2",
  },
  {
    color: "#F6CCCB",
    src: "/assets/notebook.png",
    id: "3",
  },
  {
    color: "#FCF097",
    src: "/assets/rocket.png",
    id: "4",
  },
  {
    color: "#F8D8B0",
    src: "/assets/tools.png",
    id: "5",
  },
];

const schema = z.object({
  boardName: z.string().min(3, "Digite um nome válido"),
  boardIcon: z.string().min(1, "Escolha um ícone"),
});

type ModalValues = z.infer<typeof schema>;

const ModalBoard = () => {
  const { boardToEdit, boards } = useAppSelector(
    createSelector(
      (store) => store,
      (store) => ({
        boardToEdit: store.boardToEdit,
        boards: store.boards,
      })
    )
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm<ModalValues>({
    defaultValues: {
      boardName: boardToEdit.length > 0 ? boardToEdit[0].name : "",
      boardIcon: boardToEdit.length > 0 ? boardToEdit[0].icon : "",
    },
    mode: "onSubmit",
    resolver: zodResolver(schema),
  });

  const [selectedIcon, setSelectedIcon] = useState(
    boardToEdit.length > 0 ? boardToEdit[0].icon : ""
  );
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleSaveBoard = (values: ModalValues) => {
    const boardDetails = {
      name: values.boardName,
      id: boardToEdit.length > 0 ? boardToEdit[0].id : uuidv4(),
      icon: values.boardIcon,
      slug: createSlug(values.boardName),
    };

    if (boardToEdit.length > 0) {
      dispatch(updateBoard(boardDetails));
      dispatch(clearBoardToEdit());
    } else {
      dispatch(addBoard(boardDetails));
    }
    dispatch(setModalBoardOpen());
    router.push(`/${boardDetails.slug}`);
  };

  const cancelBoard = () => {
    dispatch(setModalBoardOpen());
    dispatch(clearBoardToEdit());
    reset();
  };

  const handleDeleteBoard = () => {
    if (boards[0].id !== boardToEdit.id) {
      dispatch(deleteBoard(boardToEdit));
      dispatch(setModalBoardOpen());
      dispatch(clearBoardToEdit());
      router.push(`/${boards[0].slug}`);
    }
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <Modal
      title={boardToEdit.length > 0 ? "Edit board" : "New Board"}
      type={ModalType.newBoard}
    >
      <form onSubmit={handleSubmit(handleSaveBoard)}>
        <InputName
          title="Board Name"
          placeholder="Board name here..."
          register={register}
          name="boardName"
        />
        {errors?.boardName?.message && (
          <ErrorMessage>{errors.boardName.message}</ErrorMessage>
        )}
        <div className={styles["container-board-logos"]}>
          {logos.map((logo) => (
            <div key={logo.id}>
              <input
                type="radio"
                id={logo.id}
                value={logo.src}
                className={styles["hidden-input"]}
                {...register("boardIcon")}
              />
              <label htmlFor={logo.id}>
                <BoardLogo
                  key={logo.id}
                  color={logo.color}
                  src={logo.src}
                  isInModal
                  onClick={() => setSelectedIcon(`${logo.src}`)}
                  isSelected={selectedIcon === logo.src}
                />
              </label>
            </div>
          ))}
        </div>
        {errors?.boardIcon?.message && (
          <ErrorMessage>{errors.boardIcon.message}</ErrorMessage>
        )}
        <div className={styles["container-buttons"]}>
          <Button
            title={boardToEdit.length > 0 ? "Save board" : "Create Board"}
            btnStyle={ButtonType.save}
            type="submit"
          />
          <Button
            title="Cancel"
            btnStyle={ButtonType.cancel}
            onClick={cancelBoard}
            type="button"
          />
          <Button
            title="Delete Board"
            btnStyle={ButtonType.delete}
            type="button"
            disabled={boardToEdit.length === 0 || boardToEdit[0].id === "1"}
            onClick={handleDeleteBoard}
          />
        </div>
      </form>
    </Modal>
  );
};

export default ModalBoard;
