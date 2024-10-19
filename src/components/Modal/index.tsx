"use client";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { CloseModal } from "../Icons";
import styles from "./Modal.module.scss";
import { setModalOpen } from "@/store/reducers/modal";
import { useRef } from "react";
import classNames from "classnames";

const Modal = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  const dispatch = useAppDispatch();
  const overlayRef = useRef<HTMLDivElement>(null);
  const theme = useAppSelector((store) => store.colorMode);

  const handleClickOverlay = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (e.target === overlayRef.current) {
      dispatch(setModalOpen());
    } else {
      e.stopPropagation();
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
          <button
            className={styles.icon}
            onClick={() => dispatch(setModalOpen())}
          >
            <CloseModal colorMode={theme.colorMode} />
          </button>
        </div>
        {children}
      </section>
    </div>
  );
};

export default Modal;
