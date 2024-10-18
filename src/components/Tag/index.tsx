import styles from "./Tag.module.scss";

const Tag = ({ title, size }: { title: string; size: string }) => {
  const titleToShow = title[0].toUpperCase() + title.slice(1);

  return (
    <button
      className={`${styles.tag} ${styles[title]} ${
        size === "small" ? styles.small : styles.large
      }`}
    >
      {titleToShow}
    </button>
  );
};

export default Tag;
