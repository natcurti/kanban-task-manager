"use client";
import Tag from "@/components/Tag";
import sharedStyles from "../SharedStyles.module.scss";
import styles from "./SelectTags.module.scss";
import React, { useState } from "react";
import { useAppSelector } from "@/store/hooks";
import classNames from "classnames";
import { Control, Controller } from "react-hook-form";
import { ModalValues } from "@/components/ModalNewTask";

interface ISelectTags {
  name: "selectTags";
  options: string[];
  control: Control<ModalValues>;
}

const SelectTags = ({ name, options, control }: ISelectTags) => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [optionsOpen, setOptionsOpen] = useState(false);
  const theme = useAppSelector((store) => store.colorMode);

  const handleSelectTag = (tag: string, onChange: (tags: string[]) => void) => {
    const isSelected = selectedTags.find((selectedTag) => selectedTag === tag);
    if (isSelected) {
      setSelectedTags(
        selectedTags.filter((selectedTag) => selectedTag !== tag)
      );
      onChange([...selectedTags]);
    } else {
      setSelectedTags([...selectedTags, tag]);
      onChange([...selectedTags, tag]);
    }
    setOptionsOpen(false);
  };

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <div className={sharedStyles.container}>
          <p
            className={classNames(sharedStyles.title, {
              [sharedStyles["title-light"]]: theme.colorMode === "light",
            })}
          >
            Tags
          </p>
          <div className={sharedStyles.wrapper}>
            <label
              htmlFor={name}
              className={classNames(sharedStyles.format, styles.label, {
                [sharedStyles["format-light"]]: theme.colorMode === "light",
              })}
              onClick={() => setOptionsOpen(!optionsOpen)}
            >
              {selectedTags.length > 0 ? (
                <span className={styles.tags}>
                  {selectedTags.map((tag) => (
                    <Tag key={tag} size="small" title={tag} />
                  ))}
                </span>
              ) : (
                <span className={sharedStyles["default-text"]}>
                  Choose your tags
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
                      theme.colorMode === "light",
                  }
                )}
              >
                {options.map((tag) => (
                  <span
                    key={tag}
                    onClick={() => handleSelectTag(tag, field.onChange)}
                  >
                    <Tag size="large" title={tag} />
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    />
  );
};

export default SelectTags;
