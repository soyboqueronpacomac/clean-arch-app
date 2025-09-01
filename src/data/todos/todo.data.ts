interface Todo {
  id: number | string;
  text: string;
  createdAt: Date | null;
}
export const todosData: Todo[] = [
  { id: 1, text: 'Learn TypeScript', createdAt: new Date() },
  { id: 2, text: 'Build a Node.js app', createdAt: new Date() },
  { id: 3, text: 'Understand Clean Architecture', createdAt: new Date() },
];