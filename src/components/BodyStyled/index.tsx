"use client";
import classNames from "classnames";
import styles from "./BodyStyled.module.scss";
import { useAppSelector } from "@/store/hooks";
import { createSelector } from "@reduxjs/toolkit";

const BodyStyled = ({ children }: { children: React.ReactNode }) => {
  const theme = useAppSelector(
    createSelector(
      (store) => store.colorMode,
      (colorMode) => ({ colorMode })
    )
  );

  return (
    <body
      className={classNames(styles.body, {
        [styles.light]: theme.colorMode === "light",
      })}
    >
      {children}
    </body>
  );
};

export default BodyStyled;
