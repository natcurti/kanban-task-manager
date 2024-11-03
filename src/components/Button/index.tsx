import { ButtonType } from "@/types/ButtonType";
import styles from "./Button.module.scss";
import { DeleteIcon, DoneIcon } from "../Icons";
import { useAppSelector } from "@/store/hooks";
import classNames from "classnames";

interface IButton {
  title: string;
  btnStyle: ButtonType;
  type: "submit" | "button";
  onClick?: () => void;
  disabled?: boolean;
}

const Button = ({ title, btnStyle, type, onClick, disabled }: IButton) => {
  const theme = useAppSelector((store) => store.colorMode);

  if (btnStyle === ButtonType.save) {
    return (
      <button
        className={`${styles.btn} ${styles["btn-save"]}`}
        onClick={onClick}
        type={type}
      >
        {title}
        <DoneIcon />
      </button>
    );
  } else if (btnStyle === ButtonType.cancel) {
    return (
      <button
        className={classNames(styles.btn, {
          [styles["btn-cancel"]]: theme === "dark",
          [styles["btn-cancel-light"]]: theme === "light",
        })}
        type={type}
        onClick={onClick}
      >
        {title}
      </button>
    );
  } else {
    return (
      <button
        className={classNames(styles.btn, styles["btn-delete"], {
          [styles["btn-disabled"]]: disabled,
        })}
        onClick={onClick}
        type={type}
        disabled={disabled}
      >
        {title}
        <DeleteIcon colorMode={theme} />
      </button>
    );
  }
};

export default Button;
