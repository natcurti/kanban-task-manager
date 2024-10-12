"use client";
import { useAppSelector } from "@/store/hooks";
import styles from "./MainContainer.module.scss";
import classNames from "classnames";

interface IMainContainer {
  children: React.ReactNode;
}

const MainContainer = ({ children }: IMainContainer) => {
  const theme = useAppSelector((store) => store.colorMode);

  return (
    <main
      className={classNames(styles.main, {
        [styles.light]: theme.colorMode === "light",
      })}
    >
      {children}
    </main>
  );
};

export default MainContainer;
