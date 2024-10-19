"use client";
import styles from "./SwitchTheme.module.scss";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { MoonIcon, SunIcon } from "../Icons";
import { setColorMode } from "@/store/reducers/colorMode";
import classNames from "classnames";
import { createSelector } from "@reduxjs/toolkit";

interface ISwitchTheme {
  isOpen: boolean;
}

const SwitchTheme = ({ isOpen }: ISwitchTheme) => {
  const theme = useAppSelector(
    createSelector(
      (store) => store.colorMode,
      (colorMode) => ({ colorMode })
    )
  );
  const dispatch = useAppDispatch();

  return (
    <div className={styles.container}>
      <button
        className={classNames(styles["toggle-theme"], {
          [styles.hidden]: isOpen,
        })}
        onClick={() => dispatch(setColorMode())}
      >
        {theme.colorMode === "dark" ? (
          <SunIcon colorMode={theme.colorMode} />
        ) : (
          <MoonIcon colorMode={theme.colorMode} />
        )}
      </button>

      <div
        className={classNames(styles["container-buttons"], {
          [styles.show]: isOpen,
          [styles["container-buttons-light"]]: theme.colorMode === "light",
        })}
      >
        <button
          className={classNames(styles["btn-dark"], {
            [styles["btn-dark-light-mode"]]: theme.colorMode === "light",
          })}
          onClick={() => dispatch(setColorMode("dark"))}
        >
          <span>
            <MoonIcon colorMode={theme.colorMode} />
          </span>
          Dark
        </button>
        <button
          className={classNames(styles["btn-light"], {
            [styles["btn-light-light-mode"]]: theme.colorMode === "light",
          })}
          onClick={() => dispatch(setColorMode("light"))}
        >
          <span>
            <SunIcon colorMode={theme.colorMode} />
          </span>
          Light
        </button>
      </div>
    </div>
  );
};

export default SwitchTheme;
