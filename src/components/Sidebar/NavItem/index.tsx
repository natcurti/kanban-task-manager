import Link from "next/link";
import styles from "./NavItem.module.scss";
import classNames from "classnames";
import { IBoard } from "@/types/IBoard";
import BoardLogo from "@/components/BoardLogo";

interface INavItem {
  isOpen: boolean;
  isActive: boolean;
  colorMode: string;
  board: IBoard;
}

const NavItem = ({ isOpen, isActive, colorMode, board }: INavItem) => {
  return (
    <li
      className={classNames(styles.item, {
        [styles["item-opened"]]: isOpen,
        [styles.active]: isActive,
        [styles["active-light"]]: isActive && colorMode === "light",
      })}
    >
      <Link
        href={`/${board.slug}`}
        className={classNames(styles.link, {
          [styles["link-light"]]: colorMode === "light",
        })}
      >
        <span className={styles.icon}>
          <BoardLogo color="#F8D8B0" src={board.icon} />
        </span>
        <span
          className={classNames(styles.title, {
            [styles["title-opened"]]: isOpen,
          })}
        >
          {board.name}
        </span>
      </Link>
    </li>
  );
};

export default NavItem;
