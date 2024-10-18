import styles from "../SharedStyles.module.scss";

const InputName = ({
  title,
  placeholder,
}: {
  title: string;
  placeholder: string;
}) => {
  return (
    <div className={styles.container}>
      <label className={styles.title} id={title}>
        {title}
      </label>
      <input
        placeholder={placeholder}
        type="text"
        className={styles.input}
        name={title}
      />
    </div>
  );
};

export default InputName;
