export interface Todo {
  id: number | string;
  text: string;
  completedAt: Date | null;
}
export const todosData: Todo[] = [
  { id: 1, text: 'Learn TypeScript', completedAt: new Date() },
  { id: 2, text: 'Build a Node.js app', completedAt: new Date() },
  { id: 3, text: 'Understand Clean Architecture', completedAt: new Date() },
];