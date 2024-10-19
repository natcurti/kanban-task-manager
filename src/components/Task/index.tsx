import { ITask } from "@/types/ITask";

const Task = ({ name, status, tags, cover }: ITask) => {
  console.log(name, status, tags, cover);

  return <div></div>;
};

export default Task;
