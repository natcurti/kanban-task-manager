"use client";
import Tag from "@/components/Tag";
import sharedStyles from "../SharedStyles.module.scss";
import styles from "./SelectTags.module.scss";
import React, { useState } from "react";
import { useAppSelector } from "@/store/hooks";
import classNames from "classnames";
import { createSelector } from "@reduxjs/toolkit";

interface ISelectTags {
  selectedTags: string[];
  setSelectedTags: React.Dispatch<React.SetStateAction<string[]>>;
}

const optionsTags = ["concept", "technical", "design", "front-end"];

const SelectTags = ({ selectedTags, setSelectedTags }: ISelectTags) => {
  const [optionsOpen, setOptionsOpen] = useState(false);
  const theme = useAppSelector(
    createSelector(
      (store) => store.colorMode,
      (colorMode) => ({ colorMode })
    )
  );

  const handleSelectTag = (tag: string) => {
    const isSelected = selectedTags.find((selectedTag) => selectedTag === tag);
    if (isSelected) {
      setSelectedTags(
        selectedTags.filter((selectedTag) => selectedTag !== tag)
      );
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
    setOptionsOpen(false);
  };

  return (
    <div className={sharedStyles.container}>
      <p
        className={classNames(sharedStyles.title, {
          [sharedStyles["title-light"]]: theme.colorMode === "light",
        })}
      >
        Tags
      </p>
      <div className={sharedStyles.wrapper}>
        <button
          className={classNames(sharedStyles.format, styles["btn-tags"], {
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
            <span>Choose your tags</span>
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
            {optionsTags.map((tag) => (
              <span key={tag} onClick={() => handleSelectTag(tag)}>
                <Tag size="large" title={tag} />
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SelectTags;
