import { ButtonType } from "@/types/ButtonType";
import styles from "./Button.module.scss";
import { DoneIcon } from "../Icons";
import { useAppSelector } from "@/store/hooks";
import classNames from "classnames";

interface IButton {
  title: string;
  btnStyle: ButtonType;
  type: "submit" | "button";
  onClick?: () => void;
}

const Button = ({ title, btnStyle, type, onClick }: IButton) => {
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
  } else {
    return (
      <button
        className={classNames(styles.btn, {
          [styles["btn-cancel"]]: theme.colorMode === "dark",
          [styles["btn-cancel-light"]]: theme.colorMode === "light",
        })}
        type={type}
        onClick={onClick}
      >
        {title}
      </button>
    );
  }
};

export default Button;
