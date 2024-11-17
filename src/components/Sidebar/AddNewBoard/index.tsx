import { AddBoardIcon } from "@/components/Icons";
import classNames from "classnames";
import styles from "./AddNewBoard.module.scss";
import { useAppDispatch } from "@/store/hooks";
import { setModalBoardOpen } from "@/store/reducers/modalBoard";

interface IAddNewBoard {
  colorMode: string;
  isOpen: boolean;
}

const AddNewBoard = ({ colorMode, isOpen }: IAddNewBoard) => {
  const dispatch = useAppDispatch();

  return (
    <li
      onClick={() => dispatch(setModalBoardOpen())}
      className={classNames(styles.container, {
        [styles["container-light"]]: colorMode === "light",
        [styles["container-opened"]]: isOpen,
      })}
    >
      <span className={styles.icon}>
        <AddBoardIcon colorMode={colorMode} />
      </span>
      <span
        className={classNames(styles.title, {
          [styles["title-opened"]]: isOpen,
        })}
      >
        Add New Board
      </span>
    </li>
  );
};

export default AddNewBoard;
