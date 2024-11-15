"use client";
import classNames from "classnames";
import styles from "./BodyStyled.module.scss";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { useLayoutEffect } from "react";
import { LocalStorage } from "@/utils/LocalStorage";
import { setColorMode } from "@/store/reducers/colorMode";

const BodyStyled = ({ children }: { children: React.ReactNode }) => {
  const theme = useAppSelector((store) => store.colorMode);
  const dispatch = useAppDispatch();

  useLayoutEffect(() => {
    const theme = LocalStorage.getItemFromStorage("theme");
    if (theme) {
      dispatch(setColorMode(theme));
    } else {
      dispatch(setColorMode("dark"));
    }
  }, [dispatch]);

  return (
    <body
      className={classNames(styles.body, {
        [styles.light]: theme === "light",
      })}
    >
      {children}
    </body>
  );
};

export default BodyStyled;
