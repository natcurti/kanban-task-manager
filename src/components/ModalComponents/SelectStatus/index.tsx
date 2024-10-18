"use client";
import Status from "@/components/Status";
import sharedStyles from "../SharedStyles.module.scss";
import styles from "./SelectStatus.module.scss";
import { useState } from "react";

const statusOptions = ["Backlog", "In Progress", "In Review", "Completed"];

const SelectStatus = () => {
  const [optionsOpen, setOptionsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleOption = (title: string) => {
    setSelectedOption(title);
    setOptionsOpen(false);
  };

  return (
    <div className={sharedStyles.container}>
      <p className={sharedStyles.title}>Status</p>
      <div className={sharedStyles.wrapper}>
        <button
          onClick={() => setOptionsOpen(!optionsOpen)}
          className={`${sharedStyles.format} ${styles["btn-status"]}`}
        >
          {selectedOption ? (
            <span className={styles.selected}>
              <Status title={selectedOption} />
            </span>
          ) : (
            <span>Choose a status</span>
          )}
        </button>
        {optionsOpen && (
          <div
            className={`${sharedStyles["container-options"]} ${styles.details}`}
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
