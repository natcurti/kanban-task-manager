"use client";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { AddBoardIcon, BoardLogoOne, CloseIcon, MenuIcon } from "../Icons";
import SwitchMode from "../SwitchMode";
import styles from "./Sidebar.module.scss";
import { setIsOpen } from "@/store/reducers/navBar";
import classNames from "classnames";

const SideBar = () => {
  const isOpen = useAppSelector((store) => store.navBar);
  const dispatch = useAppDispatch();
  console.log(isOpen);

  return (
    <nav
      className={classNames(styles.menu, {
        [styles["menu-opened"]]: isOpen,
      })}
    >
      <div className={styles["container-buttons"]}>
        <button
          className={classNames(
            styles["btn-menu-hamburguer"],
            styles["btn-common-styles"]
          )}
          onClick={() => dispatch(setIsOpen())}
        >
          {isOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
        <div className={styles["container-buttons-boards"]}>
          <button className={classNames(styles["btn-common-styles"])}>
            <BoardLogoOne />
          </button>
          <button className={styles["btn-add-board"]}>
            <AddBoardIcon />
          </button>
        </div>
      </div>
      <SwitchMode />
    </nav>
  );
};

export default SideBar;
