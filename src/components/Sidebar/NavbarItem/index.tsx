import Link from "next/link";
import styles from "./NavbarItem.module.scss";
import classNames from "classnames";

interface INavbarItem {
  title: string;
  isOpen: boolean;
  children: React.ReactNode;
}

const NavbarItem = ({ title, isOpen, children }: INavbarItem) => {
  return (
    <li
      className={classNames(styles.item, {
        [styles["item-opened"]]: isOpen,
      })}
    >
      <Link href="" className={styles.link}>
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
