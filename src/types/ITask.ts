export interface ITask {
  name: string;
  boardId: string;
  status: string;
  tags: string[];
  cover?: string;
}
