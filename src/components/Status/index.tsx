import classNames from "classnames";
import styles from "./Status.module.scss";

const Status = ({ title, quantity }: { title: string; quantity?: number }) => {
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
      <p>
        {title} ({quantity})
      </p>
    </section>
  );
};

export default Status;
