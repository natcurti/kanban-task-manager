"use client";
import styles from "./SwitchTheme.module.scss";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { MoonIcon, SunIcon } from "../Icons";
import { setColorMode } from "@/store/reducers/colorMode";
import classNames from "classnames";

interface ISwitchTheme {
  isOpen: boolean;
}

const SwitchTheme = ({ isOpen }: ISwitchTheme) => {
  const theme = useAppSelector((store) => store.colorMode);
  const dispatch = useAppDispatch();

  return (
    <div className={styles.container}>
      <button
        className={classNames(styles["toggle-theme"], {
          [styles.hidden]: isOpen,
        })}
        onClick={() => {
          dispatch(setColorMode());
        }}
      >
        {theme === "dark" ? (
          <SunIcon colorMode={theme} />
        ) : (
          <MoonIcon colorMode={theme} />
        )}
      </button>

      <div
        className={classNames(styles["container-buttons"], {
          [styles.show]: isOpen,
          [styles["container-buttons-light"]]: theme === "light",
        })}
      >
        <button
          className={classNames(styles["btn-dark"], {
            [styles["btn-dark-light-mode"]]: theme === "light",
          })}
          onClick={() => {
            dispatch(setColorMode("dark"));
          }}
        >
          <span>
            <MoonIcon colorMode={theme} />
          </span>
          Dark
        </button>
        <button
          className={classNames(styles["btn-light"], {
            [styles["btn-light-light-mode"]]: theme === "light",
          })}
          onClick={() => {
            dispatch(setColorMode("light"));
          }}
        >
          <span>
            <SunIcon colorMode={theme} />
          </span>
          Light
        </button>
      </div>
    </div>
  );
};

export default SwitchTheme;
