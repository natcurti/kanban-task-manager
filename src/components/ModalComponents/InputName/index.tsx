"use client";
import { useAppSelector } from "@/store/hooks";
import sharedStyles from "../SharedStyles.module.scss";
import classNames from "classnames";
import { FieldValues, Path, UseFormRegister } from "react-hook-form";

interface IInputName<T extends FieldValues> {
  title: string;
  placeholder: string;
  name: Path<T>;
  register: UseFormRegister<T>;
}

const InputName = <T extends FieldValues>({
  title,
  placeholder,
  name,
  register,
}: IInputName<T>) => {
  const theme = useAppSelector((store) => store.colorMode);

  return (
    <div className={sharedStyles.container}>
      <label
        className={classNames(sharedStyles.title, {
          [sharedStyles["title-light"]]: theme.colorMode === "light",
        })}
        htmlFor={name}
      >
        {title}
      </label>
      <input
        id={name}
        {...register(name)}
        placeholder={placeholder}
        type="text"
        className={classNames(sharedStyles.format, {
          [sharedStyles["format-light"]]: theme.colorMode === "light",
        })}
      />
    </div>
  );
};

export default InputName;
