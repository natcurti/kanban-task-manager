import classNames from "classnames";
import styles from "./ButtonNavbar.module.scss";

interface IButtonNavbar {
  title: string;
  isOpen: boolean;
  children: React.ReactNode;
}

const ButtonNavbar = ({ title, isOpen, children }: IButtonNavbar) => {
  return (
    <button
      className={classNames(styles.btn, {
        [styles["btn-opened"]]: isOpen,
      })}
    >
      {children}
      {isOpen && title}
    </button>
  );
};

export default ButtonNavbar;
