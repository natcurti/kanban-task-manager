"use client";
import classNames from "classnames";
import styles from "./Sidebar.module.scss";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { AddBoardIcon, BoardLogoOne, CloseIcon, MenuIcon } from "../Icons";
import { setIsOpen } from "@/store/reducers/navBar";
import ButtonNavbar from "../ButtonNavbar";

const Sidebar = () => {
  const isOpen = useAppSelector((store) => store.navBar);
  const dispatch = useAppDispatch();

  return (
    <nav
      className={classNames(styles.navbar, {
        [styles["navbar-opened"]]: isOpen,
      })}
    >
      <button
        className={classNames(styles["btn-menu"])}
        onClick={() => dispatch(setIsOpen())}
      >
        {isOpen ? <CloseIcon /> : <MenuIcon />}
      </button>
      <div className={styles["container-buttons"]}>
        <ButtonNavbar title="Default Board" isOpen={isOpen}>
          <BoardLogoOne />
        </ButtonNavbar>
        <ButtonNavbar title="Add new board" isOpen={isOpen}>
          <AddBoardIcon />
        </ButtonNavbar>
      </div>
    </nav>
  );
};

export default Sidebar;
