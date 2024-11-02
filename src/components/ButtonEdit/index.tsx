import { EditIcon } from "../Icons";
import styles from "./ButtonEdit.module.scss";

interface IButtonEdit {
  colorMode: string;
  onClick: () => void;
}

const ButtonEdit = ({ colorMode, onClick }: IButtonEdit) => {
  return (
    <button className={styles["btn-edit"]} onClick={onClick} type="button">
      <EditIcon colorMode={colorMode} />
    </button>
  );
};

export default ButtonEdit;
