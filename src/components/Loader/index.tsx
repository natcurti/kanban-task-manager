"use client";
import { useAppSelector } from "@/store/hooks";
import styles from "./Loader.module.scss";
import classNames from "classnames";

const Loader = () => {
  const theme = useAppSelector((store) => store.colorMode);

  return (
    <span
      className={classNames(styles.loader, {
        [styles["loader-light"]]: theme.colorMode === "light",
      })}
    ></span>
  );
};

export default Loader;
