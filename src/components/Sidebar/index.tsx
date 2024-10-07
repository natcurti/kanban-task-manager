import { AddBoardIcon, BoardLogoOne, MenuIcon } from "../Icons";
import styles from "./Sidebar.module.scss";

const SideBar = () => {
  return (
    <nav className={styles.menu}>
      <div className={styles["container-buttons"]}>
        <button className={styles["btn-menu-hamburguer"]}>
          <MenuIcon />
        </button>
        <div className={styles["container-buttons-boards"]}>
          <button>
            <BoardLogoOne />
          </button>
          <button className={styles["btn-add-board"]}>
            <AddBoardIcon />
          </button>
        </div>
      </div>
      {/* 
        Switch mode here
       */}
    </nav>
  );
};

export default SideBar;
