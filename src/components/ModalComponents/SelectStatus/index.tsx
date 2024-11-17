"use client";
import Status from "@/components/Status";
import sharedStyles from "../SharedStyles.module.scss";
import styles from "./SelectStatus.module.scss";
import React, { useEffect, useState } from "react";
import { useAppSelector } from "@/store/hooks";
import classNames from "classnames";
import { Control, Controller } from "react-hook-form";
import { ModalValues } from "@/components/ModalTask";
import { createSelector } from "@reduxjs/toolkit";

interface ISelectStatus {
  name: "selectStatus";
  options: string[];
  control: Control<ModalValues>;
}

const SelectStatus = ({ name, options, control }: ISelectStatus) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [optionsOpen, setOptionsOpen] = useState(false);
  const { taskToEdit, theme } = useAppSelector(
    createSelector(
      (store) => store,
      (store) => ({
        taskToEdit: store.taskToEdit,
        theme: store.colorMode,
      })
    )
  );

  const handleOption = (title: string, onChange: (value: string) => void) => {
    setSelectedOption(title);
    onChange(title);
    setOptionsOpen(false);
  };

  useEffect(() => {
    if (taskToEdit.length > 0) {
      setSelectedOption(taskToEdit[0].status);
    } else {
      setSelectedOption("");
    }
  }, [taskToEdit]);

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => {
        return (
          <div className={sharedStyles.container}>
            <p
              className={classNames(sharedStyles.title, {
                [sharedStyles["title-light"]]: theme === "light",
              })}
            >
              Status
            </p>
            <div className={sharedStyles.wrapper}>
              <label
                htmlFor={name}
                onClick={() => setOptionsOpen(!optionsOpen)}
                className={classNames(sharedStyles.format, styles.label, {
                  [sharedStyles["format-light"]]: theme === "light",
                })}
              >
                {selectedOption !== "" ? (
                  <span className={styles.selected}>
                    <Status title={selectedOption} />
                  </span>
                ) : (
                  <span className={sharedStyles["default-text"]}>
                    Choose a status
                  </span>
                )}
              </label>
              <input
                {...field}
                className={sharedStyles["hidden-input"]}
                id={name}
              />
              {optionsOpen && (
                <div
                  className={classNames(
                    sharedStyles["container-options"],
                    styles.details,
                    {
                      [sharedStyles["container-options-light"]]:
                        theme === "light",
                    }
                  )}
                >
                  {options.map((status) => (
                    <button
                      type="button"
                      key={status}
                      className={styles["btn-options"]}
                      onClick={() => handleOption(status, field.onChange)}
                    >
                      <Status title={status} />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        );
      }}
    />
  );
};

export default SelectStatus;
