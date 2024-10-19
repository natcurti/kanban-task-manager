import Link from "next/link";
import styles from "./NavbarItem.module.scss";
import classNames from "classnames";
import { useAppSelector } from "@/store/hooks";

interface INavbarItem {
  title: string;
  isOpen: boolean;
  children: React.ReactNode;
}

const NavbarItem = ({ title, isOpen, children }: INavbarItem) => {
  const theme = useAppSelector((store) => store.colorMode);

  return (
    <li
      className={classNames(styles.item, {
        [styles["item-opened"]]: isOpen,
      })}
    >
      <Link
        href=""
        className={classNames(styles.link, {
          [styles["link-light"]]: theme.colorMode === "light",
        })}
      >
        <span className={styles.icon}>{children}</span>
        <span
          className={classNames(styles.title, {
            [styles["title-opened"]]: isOpen,
          })}
        >
          {title}
        </span>
      </Link>
    </li>
  );
};

export default NavbarItem;
