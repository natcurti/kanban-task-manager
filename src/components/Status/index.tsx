"use client";
import classNames from "classnames";
import styles from "./Status.module.scss";
import { useAppSelector } from "@/store/hooks";

const Status = ({ title, quantity }: { title: string; quantity?: number }) => {
  const theme = useAppSelector((store) => store.colorMode);

  return (
    <section className={styles.container}>
      <div
        className={classNames(styles.circle, {
          [styles.backlog]: title === "Backlog",
          [styles.progress]: title === "In Progress",
          [styles.review]: title === "In Review",
          [styles.completed]: title === "Completed",
        })}
      ></div>
      <p
        className={classNames({
          [styles["title-light"]]: theme.colorMode === "light",
        })}
      >
        {title}
      </p>
      <span
        className={classNames({
          [styles.hidden]: quantity === undefined,
        })}
      >{`(${quantity})`}</span>
    </section>
  );
};

export default Status;
