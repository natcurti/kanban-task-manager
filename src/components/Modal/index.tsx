import { useAppDispatch } from "@/store/hooks";
import { CloseModal } from "../Icons";
import styles from "./Modal.module.scss";
import { setModalOpen } from "@/store/reducers/modal";

const Modal = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  const dispatch = useAppDispatch();

  return (
    <div className={styles["backdrop-container"]}>
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
