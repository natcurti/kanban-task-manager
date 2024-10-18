"use client";
import sharedStyle from "../SharedStyles.module.scss";
import styles from "./SelectStatus.module.scss";

import { useState } from "react";

const statusOptions = [
  {
    title: "Backlog",
    color: "#70a3f3",
  },
  {
    title: "In Progress",
    color: "#f3ce49",
  },
  {
    title: "In Review",
    color: "#b787f5",
  },
  {
    title: "Completed",
    color: "#77db89",
  },
];

const SelectStatus = ({ title }: { title: string }) => {
  const [optionsOpen, setOptionsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleOption = (title: string) => {
    setSelectedOption(title);
    setOptionsOpen(false);
  };

  return (
    <div className={sharedStyle.container}>
      <p className={sharedStyle.title}>{title}</p>
      <button
        onClick={() => setOptionsOpen(true)}
        className={`${sharedStyle.btn} ${styles["btn-status"]}`}
      >
        {selectedOption ? (
          statusOptions.map(
            (option) =>
              option.title === selectedOption && (
                <>
                  <span
                    className={styles.circle}
                    style={{ backgroundColor: option.color }}
                    key={option.title}
                  ></span>
                  <span className={styles.selected}>{selectedOption}</span>
                </>
              )
          )
        ) : (
          <span>Choose a status</span>
        )}
      </button>
      {optionsOpen && (
        <div className={styles["container-options"]}>
          {statusOptions.map((status) => (
            <button
              key={status.title}
              className={styles["btn-options"]}
              onClick={() => handleOption(status.title)}
            >
              <span
                style={{ backgroundColor: status.color }}
                className={styles.circle}
              ></span>
              {status.title}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SelectStatus;
