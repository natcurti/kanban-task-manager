import { useAppDispatch } from "@/store/hooks";
import { CloseModal } from "../Icons";
import styles from "./Modal.module.scss";
import { setModalOpen } from "@/store/reducers/modal";
import { useRef } from "react";

const Modal = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  const dispatch = useAppDispatch();
  const overlayRef = useRef<HTMLDivElement>(null);

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
      <section className={styles.modal}>
        <div className={styles.title}>
          <p>{title}</p>
          <button
            className={styles.icon}
            onClick={() => dispatch(setModalOpen())}
          >
            <CloseModal />
          </button>
        </div>
        {children}
      </section>
    </div>
  );
};

export default Modal;
