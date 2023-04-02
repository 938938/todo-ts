export interface Todo {
  id: number;
  text: string;
  type: 'clear' | 'default' | 'important';
}
