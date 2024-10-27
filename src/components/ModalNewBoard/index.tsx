import { ModalType } from "@/types/ModalType";
import Modal from "../Modal";
import InputName from "../ModalComponents/InputName";
import BoardLogo from "../BoardLogo";
import Button from "../Button";
import styles from "./ModalNewBoard.module.scss";
import { ButtonType } from "@/types/ButtonType";
import { useAppDispatch } from "@/store/hooks";
import { setModalBoardOpen } from "@/store/reducers/modalBoard";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import ErrorMessage from "../ErrorMessage";
import { useEffect, useState } from "react";
import { addBoard } from "@/store/reducers/boards";
import { v4 as uuidv4 } from "uuid";
import { createSlug } from "@/utils/createSlug";

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

const ModalNewBoard = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm<ModalValues>({
    defaultValues: {
      boardName: "",
      boardIcon: "",
    },
    mode: "onSubmit",
    resolver: zodResolver(schema),
  });

  const [selectedIcon, setSelectedIcon] = useState("");
  const dispatch = useAppDispatch();

  const handleSaveBoard = (values: ModalValues) => {
    dispatch(
      addBoard({
        name: values.boardName,
        id: uuidv4(),
        icon: values.boardIcon,
        slug: createSlug(values.boardName),
        isActive: false,
      })
    );
    dispatch(setModalBoardOpen());
  };

  const cancelBoard = () => {
    dispatch(setModalBoardOpen());
    reset();
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <Modal title="New board" type={ModalType.newBoard}>
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
            title="Create board"
            btnStyle={ButtonType.save}
            type="submit"
          />
          <Button
            title="Cancel"
            btnStyle={ButtonType.cancel}
            onClick={cancelBoard}
            type="button"
          />
        </div>
      </form>
    </Modal>
  );
};

export default ModalNewBoard;
