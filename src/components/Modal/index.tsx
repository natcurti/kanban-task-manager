"use client";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { CloseModal } from "../Icons";
import styles from "./Modal.module.scss";
import React, { useRef } from "react";
import classNames from "classnames";
import { setModalTaskOpen } from "@/store/reducers/modalTask";
import { ModalType } from "@/types/ModalType";
import { setModalBoardOpen } from "@/store/reducers/modalBoard";

interface IModal {
  title: string;
  children: React.ReactNode;
  type: ModalType;
}

const Modal = ({ title, children, type }: IModal) => {
  const dispatch = useAppDispatch();
  const overlayRef = useRef<HTMLDivElement>(null);
  const theme = useAppSelector((store) => store.colorMode);

  const handleClickOverlay = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (e.target === overlayRef.current) {
      if (type === ModalType.newTask) {
        dispatch(setModalTaskOpen());
      } else {
        dispatch(setModalBoardOpen());
      }
    } else {
      e.stopPropagation();
    }
  };

  const handleCloseModal = () => {
    if (type === ModalType.newTask) {
      dispatch(setModalTaskOpen());
    } else {
      dispatch(setModalBoardOpen());
    }
  };

  return (
    <div
      className={styles["backdrop-container"]}
      ref={overlayRef}
      onClick={handleClickOverlay}
    >
      <section
        className={classNames(styles.modal, {
          [styles["modal-light"]]: theme.colorMode === "light",
        })}
      >
        <div
          className={classNames(styles.title, {
            [styles["title-light"]]: theme.colorMode === "light",
          })}
        >
          <p>{title}</p>
          <button className={styles.icon} onClick={handleCloseModal}>
            <CloseModal colorMode={theme.colorMode} />
          </button>
        </div>
        {children}
      </section>
    </div>
  );
};

export default Modal;
