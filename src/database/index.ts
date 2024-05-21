import { TodosTable, UsersTable } from "./tables";

export interface Database {
  users: UsersTable;
  todos: TodosTable;
}
