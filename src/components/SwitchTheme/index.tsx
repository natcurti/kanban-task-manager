"use client";
import styles from "./SwitchTheme.module.scss";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { MoonIcon, SunIcon } from "../Icons";
import { setColorMode } from "@/store/reducers/colorMode";
import classNames from "classnames";
import { LocalStorage } from "@/utils/LocalStorage";

interface ISwitchTheme {
  isOpen: boolean;
}

const SwitchTheme = ({ isOpen }: ISwitchTheme) => {
  const theme = useAppSelector((store) => store.colorMode);
  const dispatch = useAppDispatch();

  const handleStorage = (color: string) => {
    LocalStorage.setItemOnStorage("theme", color);
  };

  return (
    <div className={styles.container}>
      <button
        className={classNames(styles["toggle-theme"], {
          [styles.hidden]: isOpen,
        })}
        onClick={() => {
          dispatch(setColorMode());
          handleStorage(theme.colorMode === "dark" ? "light" : "dark");
        }}
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
          onClick={() => {
            dispatch(setColorMode("dark"));
            handleStorage("dark");
          }}
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
          onClick={() => {
            dispatch(setColorMode("light"));
            handleStorage("light");
          }}
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
