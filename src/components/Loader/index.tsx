"use client";
import styles from "./Loader.module.scss";

const Loader = () => {
  return (
    <div className={styles["container-loader"]}>
      <span className={styles.loader}></span>
    </div>
  );
};

export default Loader;
