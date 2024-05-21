import {
  ColumnType,
  Generated,
  Insertable,
  Selectable,
  Updateable,
} from "kysely";

export interface TodosTable {
  id: Generated<number>;
  userId: number;
  content: string;
  completed?: number;
  createdAt: ColumnType<Date, string | undefined, never>;
}

export type Todo = Selectable<TodosTable>;
export type NewTodo = Insertable<TodosTable>;
export type TodoUpdate = Updateable<TodosTable>;
