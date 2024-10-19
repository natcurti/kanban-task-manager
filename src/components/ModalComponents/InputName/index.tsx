"use client";
import { useAppSelector } from "@/store/hooks";
import sharedStyles from "../SharedStyles.module.scss";
import classNames from "classnames";

const InputName = ({
  title,
  placeholder,
}: {
  title: string;
  placeholder: string;
}) => {
  const theme = useAppSelector((store) => store.colorMode);

  return (
    <div className={sharedStyles.container}>
      <label
        className={classNames(sharedStyles.title, {
          [sharedStyles["title-light"]]: theme.colorMode === "light",
        })}
        id={title}
      >
        {title}
      </label>
      <input
        placeholder={placeholder}
        type="text"
        className={classNames(sharedStyles.format, {
          [sharedStyles["format-light"]]: theme.colorMode === "light",
        })}
        name={title}
      />
    </div>
  );
};

export default InputName;
