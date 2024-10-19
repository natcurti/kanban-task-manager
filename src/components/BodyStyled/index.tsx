"use client";
import classNames from "classnames";
import styles from "./BodyStyled.module.scss";
import { useAppSelector } from "@/store/hooks";

const BodyStyled = ({ children }: { children: React.ReactNode }) => {
  const theme = useAppSelector((store) => store.colorMode);

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
