import Image from "next/image";
import styles from "./BoardLogo.module.scss";
import classNames from "classnames";

const BoardLogo = ({
  color,
  src,
  isInModal,
  isSelected,
  onClick,
}: {
  color: string;
  src: string;
  isSelected?: boolean;
  isInModal?: boolean;
  onClick?: () => void;
}) => {
  return (
    <div
      className={classNames(styles.container, {
        [styles.hover]: isInModal,
        [styles.selected]: isSelected,
      })}
      style={{ backgroundColor: color }}
      onClick={onClick}
    >
      <Image src={src} width={32} height={32} alt="Board Logo" />
    </div>
  );
};

export default BoardLogo;
