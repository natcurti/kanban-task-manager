"use client";
import classNames from "classnames";
import styles from "./Sidebar.module.scss";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { AddBoardIcon, CloseIcon, MenuIcon } from "../Icons";
import { setIsOpen } from "@/store/reducers/navBar";
import NavbarItem from "./NavbarItem";
import SwitchTheme from "../SwitchTheme";
import { createSelector } from "@reduxjs/toolkit";
import Modal from "../Modal";
import { ModalType } from "@/types/modalType";
import { setModalBoardOpen } from "@/store/reducers/modalBoard";
import InputName from "../ModalComponents/InputName";
import { useState } from "react";
import Button from "../Button";
import { ButtonType } from "@/types/buttonType";
import BoardLogo from "../BoardLogo";

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

  const [boardName, setBoardName] = useState("");

  const dispatch = useAppDispatch();

  const handleSaveBoard = () => {};
  const cancelBoard = () => {};

  return (
    <>
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
            <NavbarItem title="Default Board" isOpen={isNavbarOpen}>
              <BoardLogo color="#F8D8B0" src="/assets/books.png" />
            </NavbarItem>
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
      {isModalOpen && (
        <Modal title="New board" type={ModalType.newBoard}>
          <InputName
            title="Board Name"
            placeholder="Board name here..."
            name={boardName}
            setName={setBoardName}
          />
          <div className={styles["container-board-logos"]}>
            <BoardLogo color="#F8D8B0" src="/assets/books.png" />
            <BoardLogo color="#C4DAFB" src="/assets/clock.png" />
            <BoardLogo color="#F6CCCB" src="/assets/notebook.png" />
            <BoardLogo color="#FCF097" src="/assets/rocket.png" />
            <BoardLogo color="#F8D8B0" src="/assets/tools.png" />
          </div>
          <div className={styles["container-btns-save-cancel"]}>
            <Button
              title="Create board"
              type={ButtonType.save}
              onClick={handleSaveBoard}
            />
            <Button
              title="Cancel"
              type={ButtonType.cancel}
              onClick={cancelBoard}
            />
          </div>
        </Modal>
      )}
    </>
  );
};

export default Sidebar;
