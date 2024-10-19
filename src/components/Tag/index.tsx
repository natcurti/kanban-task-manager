import styles from "./Tag.module.scss";

const Tag = ({ title, size }: { title: string; size: string }) => {
  const titleToShow = title[0].toUpperCase() + title.slice(1);

  return (
    <span
      className={`${styles[title]} ${
        size === "small" ? styles.small : styles.large
      }`}
    >
      {titleToShow}
    </span>
  );
};

export default Tag;
