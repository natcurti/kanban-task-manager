import sharedStyles from "../SharedStyles.module.scss";

const InputName = ({
  title,
  placeholder,
}: {
  title: string;
  placeholder: string;
}) => {
  return (
    <div className={sharedStyles.container}>
      <label className={sharedStyles.title} id={title}>
        {title}
      </label>
      <input
        placeholder={placeholder}
        type="text"
        className={sharedStyles.format}
        name={title}
      />
    </div>
  );
};

export default InputName;
