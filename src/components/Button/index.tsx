import { ButtonType } from "@/types/buttonType";
import styles from "./Button.module.scss";
import { DoneIcon } from "../Icons";

interface IButton {
  title: string;
  type: ButtonType;
  onClick: () => void;
}

const Button = ({ title, type, onClick }: IButton) => {
  if (type === ButtonType.save) {
    return (
      <button
        className={`${styles.btn} ${styles["btn-save"]}`}
        onClick={onClick}
      >
        {title}
        <DoneIcon />
      </button>
    );
  } else {
    return (
      <button
        className={`${styles.btn} ${styles["btn-cancel"]}`}
        onClick={onClick}
      >
        {title}
      </button>
    );
  }
};

export default Button;
