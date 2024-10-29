export interface ITask {
  name: string;
  id: string;
  boardId: string;
  status: string;
  tags: string[];
  cover?: string;
}
