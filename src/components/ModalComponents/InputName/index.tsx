"use client";
import { useAppSelector } from "@/store/hooks";
import sharedStyles from "../SharedStyles.module.scss";
import classNames from "classnames";

interface IInputName {
  title: string;
  placeholder: string;
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
}

const InputName = ({ title, placeholder, name, setName }: IInputName) => {
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
        value={name}
        onChange={(e) => setName(e.target.value)}
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
