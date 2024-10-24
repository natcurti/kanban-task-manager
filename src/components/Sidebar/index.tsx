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
import { ModalType } from "@/types/ModalType";
import { setModalBoardOpen } from "@/store/reducers/modalBoard";
import InputName from "../ModalComponents/InputName";
import { useRef, useState } from "react";
import Button from "../Button";
import { ButtonType } from "@/types/ButtonType";
import BoardLogo from "../BoardLogo";
import { IBoard } from "@/types/IBoard";
import { v4 as uuidv4 } from "uuid";
import { createSlug } from "@/utils/createSlug";
import { addBoard, turnBoardActive } from "@/store/reducers/boards";

const logos = [
  {
    color: "#F8D8B0",
    src: "/assets/books.png",
    id: 1,
  },
  {
    color: "#C4DAFB",
    src: "/assets/clock.png",
    id: 2,
  },
  {
    color: "#F6CCCB",
    src: "/assets/notebook.png",
    id: 3,
  },
  {
    color: "#FCF097",
    src: "/assets/rocket.png",
    id: 4,
  },
  {
    color: "#F8D8B0",
    src: "/assets/tools.png",
    id: 5,
  },
];

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
  const [boardName, setBoardName] = useState("");
  const [boardIcon, setBoardIcon] = useState("");

  const dispatch = useAppDispatch();

  const handleSaveBoard = () => {
    const newBoard = {
      name: boardName,
      id: uuidv4(),
      icon: boardIcon,
      slug: createSlug(boardName),
      isActive: false,
    };

    dispatch(addBoard(newBoard));
    setBoardName("");
    setBoardIcon("");
    dispatch(setModalBoardOpen());
  };

  const cancelBoard = () => {
    setBoardName("");
    setBoardIcon("");
    dispatch(setModalBoardOpen());
  };

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
      {isModalOpen && (
        <Modal title="New board" type={ModalType.newBoard}>
          <InputName
            title="Board Name"
            placeholder="Board name here..."
            name={boardName}
            setName={setBoardName}
          />
          <div className={styles["container-board-logos"]}>
            {logos.map((logo) => (
              <BoardLogo
                key={logo.id}
                color={logo.color}
                src={logo.src}
                isInModal
                onClick={() => setBoardIcon(`${logo.src}`)}
                isSelected={boardIcon === logo.src}
              />
            ))}
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
