"use client";
import Status from "@/components/Status";
import sharedStyles from "../SharedStyles.module.scss";
import styles from "./SelectStatus.module.scss";
import React, { useState } from "react";
import { useAppSelector } from "@/store/hooks";
import classNames from "classnames";

interface ISelectStatus {
  status: string;
  setStatus: React.Dispatch<React.SetStateAction<string>>;
}

const statusOptions = ["Backlog", "In Progress", "In Review", "Completed"];

const SelectStatus = ({ status, setStatus }: ISelectStatus) => {
  const [optionsOpen, setOptionsOpen] = useState(false);
  const theme = useAppSelector((store) => store.colorMode);

  const handleOption = (title: string) => {
    setStatus(title);
    setOptionsOpen(false);
  };

  return (
    <div className={sharedStyles.container}>
      <p
        className={classNames(sharedStyles.title, {
          [sharedStyles["title-light"]]: theme.colorMode === "light",
        })}
      >
        Status
      </p>
      <div className={sharedStyles.wrapper}>
        <button
          onClick={() => setOptionsOpen(!optionsOpen)}
          className={classNames(sharedStyles.format, styles["btn-status"], {
            [sharedStyles["format-light"]]: theme.colorMode === "light",
          })}
        >
          {status !== "" ? (
            <span className={styles.selected}>
              <Status title={status} />
            </span>
          ) : (
            <span>Choose a status</span>
          )}
        </button>
        {optionsOpen && (
          <div
            className={classNames(
              sharedStyles["container-options"],
              styles.details,
              {
                [sharedStyles["container-options-light"]]:
                  theme.colorMode === "light",
              }
            )}
          >
            {statusOptions.map((status) => (
              <button
                key={status}
                className={styles["btn-options"]}
                onClick={() => handleOption(status)}
              >
                <Status title={status} />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SelectStatus;
