"use client";
import classNames from "classnames";
import styles from "./Sidebar.module.scss";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { AddBoardIcon, BoardLogoOne, CloseIcon, MenuIcon } from "../Icons";
import { setIsOpen } from "@/store/reducers/navBar";
import SwitchMode from "../SwitchMode";
import NavbarItem from "./NavbarItem";

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
      <ul className={styles["container-buttons"]}>
        <NavbarItem title="Default Board" isOpen={isOpen}>
          <BoardLogoOne />
        </NavbarItem>
        <NavbarItem title="Add new board" isOpen={isOpen}>
          <AddBoardIcon />
        </NavbarItem>
      </ul>
      <SwitchMode />
    </nav>
  );
};

export default Sidebar;
