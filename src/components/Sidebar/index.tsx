"use client";
import classNames from "classnames";
import styles from "./Sidebar.module.scss";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { CloseIcon, MenuIcon } from "../Icons";
import { setIsOpen } from "@/store/reducers/navBar";
import SwitchTheme from "../SwitchTheme";
import { createSelector } from "@reduxjs/toolkit";
import { useRef } from "react";
import ModalBoard from "../ModalBoard";
import NavList from "./NavList";

const Sidebar = () => {
  const { isNavbarOpen, theme, isModalOpen } = useAppSelector(
    createSelector(
      (store) => store,
      (store) => ({
        isNavbarOpen: store.navBar,
        theme: store.colorMode,
        isModalOpen: store.modalBoard,
      })
    )
  );

  const overlayRef = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();

  const handleClickOverlay = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (e.target === overlayRef.current) {
      dispatch(setIsOpen());
    } else {
      e.stopPropagation();
    }
  };

  return (
    <>
      <div
        className={classNames({
          [styles["backdrop-navbar"]]: isNavbarOpen,
        })}
        ref={overlayRef}
        onClick={handleClickOverlay}
      >
        <nav
          className={classNames(styles.navbar, {
            [styles["navbar-opened"]]: isNavbarOpen,
            [styles.light]: theme === "light",
          })}
        >
          <div>
            <button
              className={classNames(styles["btn-menu"], {
                [styles["btn-menu-light"]]: theme === "light",
              })}
              onClick={() => dispatch(setIsOpen())}
            >
              {isNavbarOpen ? (
                <CloseIcon colorMode={theme} />
              ) : (
                <MenuIcon colorMode={theme} />
              )}
            </button>
            <NavList colorMode={theme} isOpen={isNavbarOpen} />
          </div>
          <SwitchTheme isOpen={isNavbarOpen} />
        </nav>
      </div>
      {isModalOpen && <ModalBoard />}
    </>
  );
};

export default Sidebar;
