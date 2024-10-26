import styles from "./ErrorMessage.module.scss";

const ErrorMessage = ({ children }: { children: React.ReactNode }) => {
  return <p className={styles.error}>{children}</p>;
};

export default ErrorMessage;
