"use client";
import Tag from "@/components/Tag";
import sharedStyles from "../SharedStyles.module.scss";
import styles from "./SelectTags.module.scss";
import { useState } from "react";

const optionsTags = ["concept", "technical", "design", "front-end"];

const SelectTags = () => {
  const [optionsOpen, setOptionsOpen] = useState(false);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const handleSelectTag = (tag: string) => {
    const isSelected = selectedTags.find((selectedTag) => selectedTag === tag);
    if (isSelected) {
      setSelectedTags(
        selectedTags.filter((selectedTag) => selectedTag !== tag)
      );
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  return (
    <div className={sharedStyles.container}>
      <p className={sharedStyles.title}>Tags</p>
      <div className={sharedStyles.wrapper}>
        <button
          className={`${sharedStyles.format} ${styles["btn-tags"]}`}
          onClick={() => setOptionsOpen(!optionsOpen)}
        >
          <span className={styles.tags}>
            {selectedTags.map((tag) => (
              <Tag key={tag} size="small" title={tag} />
            ))}
          </span>
        </button>
        {optionsOpen && (
          <div
            className={`${sharedStyles["container-options"]} ${styles.details}`}
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
