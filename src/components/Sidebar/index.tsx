"use client";
import classNames from "classnames";
import styles from "./Sidebar.module.scss";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { AddBoardIcon, CloseIcon, MenuIcon } from "../Icons";
import { setIsOpen } from "@/store/reducers/navBar";
import NavbarItem from "./NavbarItem";
import SwitchTheme from "../SwitchTheme";
import { createSelector } from "@reduxjs/toolkit";
import { setModalBoardOpen } from "@/store/reducers/modalBoard";
import { useRef } from "react";
import BoardLogo from "../BoardLogo";
import { IBoard } from "@/types/IBoard";
import ModalNewBoard from "../ModalNewBoard";
import { turnBoardActive } from "@/store/reducers/boards";

const Sidebar = () => {
  const { isNavbarOpen, theme, isModalOpen, boards } = useAppSelector(
    createSelector(
      (store) => store,
      (store) => ({
        isNavbarOpen: store.navBar,
        theme: store.colorMode,
        isModalOpen: store.modalBoard,
        boards: store.boards,
      })
    )
  );
  const overlayRef = useRef<HTMLDivElement>(null);

  const dispatch = useAppDispatch();

  const selectBoard = (boardName: string) => {
    dispatch(turnBoardActive(boardName));
  };

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
              {isNavbarOpen ? (
                <CloseIcon colorMode={theme.colorMode} />
              ) : (
                <MenuIcon colorMode={theme.colorMode} />
              )}
            </button>
            <ul className={styles["container-buttons"]}>
              {boards.map((board: IBoard) => (
                <NavbarItem
                  key={board.id}
                  title={board.name}
                  isOpen={isNavbarOpen}
                  isActive={board.isActive}
                  href={board.slug}
                  onClick={() => selectBoard(board.name)}
                >
                  <BoardLogo color="#F8D8B0" src={board.icon} />
                </NavbarItem>
              ))}

              <NavbarItem
                title="Add new board"
                isOpen={isNavbarOpen}
                onClick={() => dispatch(setModalBoardOpen())}
              >
                <AddBoardIcon colorMode={theme.colorMode} />
              </NavbarItem>
            </ul>
          </div>
          <SwitchTheme isOpen={isNavbarOpen} />
        </nav>
      </div>
      {isModalOpen && <ModalNewBoard />}
    </>
  );
};

export default Sidebar;
