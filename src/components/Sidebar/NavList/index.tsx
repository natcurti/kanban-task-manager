import { IBoard } from "@/types/IBoard";
import styles from "./NavList.module.scss";
import classNames from "classnames";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { createSelector } from "@reduxjs/toolkit";
import ButtonEdit from "@/components/ButtonEdit";
import { setModalBoardOpen } from "@/store/reducers/modalBoard";
import { selectBoardToEdit } from "@/store/reducers/boardToEdit";
import AddNewBoard from "../AddNewBoard";
import NavItem from "../NavItem";
import { usePathname } from "next/navigation";

interface INavList {
  colorMode: string;
  isOpen: boolean;
}

const NavList = ({ colorMode, isOpen }: INavList) => {
  const { boards } = useAppSelector(
    createSelector(
      (store) => store,
      (store) => ({
        boards: store.boards,
      })
    )
  );
  const dispatch = useAppDispatch();
  const pathname = usePathname();

  const handleEditBoard = (board: IBoard) => {
    dispatch(setModalBoardOpen());
    dispatch(
      selectBoardToEdit({
        name: board.name,
        id: board.id,
        icon: board.icon,
        slug: board.slug,
      })
    );
  };

  return (
    <ul className={styles["container-buttons"]}>
      {boards.map((board: IBoard) => (
        <div key={board.id} className={styles["container-nav-item"]}>
          <NavItem
            isOpen={isOpen}
            isActive={board.slug === pathname}
            colorMode={colorMode}
            board={board}
          />
          <span
            className={classNames(styles["btn-edit"], {
              [styles["btn-edit-open"]]: isOpen,
            })}
          >
            <ButtonEdit
              colorMode={colorMode}
              onClick={() => handleEditBoard(board)}
            />
          </span>
        </div>
      ))}
      <div className={styles["container-nav-item"]}>
        <AddNewBoard isOpen={isOpen} colorMode={colorMode} />
      </div>
    </ul>
  );
};

export default NavList;
