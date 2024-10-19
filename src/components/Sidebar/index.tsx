"use client";
import classNames from "classnames";
import styles from "./Sidebar.module.scss";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { AddBoardIcon, BoardLogoOne, CloseIcon, MenuIcon } from "../Icons";
import { setIsOpen } from "@/store/reducers/navBar";
import NavbarItem from "./NavbarItem";
import SwitchTheme from "../SwitchTheme";
import { createSelector } from "@reduxjs/toolkit";

const Sidebar = () => {
  const { isOpen, theme } = useAppSelector(
    createSelector(
      (store) => store,
      (store) => ({
        isOpen: store.navBar,
        theme: store.colorMode,
      })
    )
  );

  const dispatch = useAppDispatch();

  return (
    <nav
      className={classNames(styles.navbar, {
        [styles["navbar-opened"]]: isOpen,
        [styles.light]: theme.colorMode === "light",
      })}
    >
      <div>
        <button
          className={classNames(styles["btn-menu"], {
            [styles["btn-menu-light"]]: theme.colorMode === "light",
          })}
          onClick={() => dispatch(setIsOpen())}
        >
          {isOpen ? (
            <CloseIcon colorMode={theme.colorMode} />
          ) : (
            <MenuIcon colorMode={theme.colorMode} />
          )}
        </button>
        <ul className={styles["container-buttons"]}>
          <NavbarItem title="Default Board" isOpen={isOpen}>
            <BoardLogoOne />
          </NavbarItem>
          <NavbarItem title="Add new board" isOpen={isOpen}>
            <AddBoardIcon colorMode={theme.colorMode} />
          </NavbarItem>
        </ul>
      </div>
      <SwitchTheme isOpen={isOpen} />
    </nav>
  );
};

export default Sidebar;
