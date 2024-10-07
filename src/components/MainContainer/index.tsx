import styles from "./MainContainer.module.scss";

interface IMainContainer {
  children: React.ReactNode;
}

const MainContainer = ({ children }: IMainContainer) => {
  return <main className={styles.main}>{children}</main>;
};

export default MainContainer;
