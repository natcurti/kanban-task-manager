import Image from "next/image";
import styles from "./BoardLogo.module.scss";

const BoardLogo = ({ color, src }: { color: string; src: string }) => {
  return (
    <div className={styles.container} style={{ backgroundColor: color }}>
      <Image src={src} width={32} height={32} alt="Board Logo" />
    </div>
  );
};

export default BoardLogo;
