import { NewTodo, Todo } from "../database/tables";
import { db } from "../lib";

export async function insertTodo(data: NewTodo): Promise<Todo> {
  return await db
    .insertInto("todos")
    .values(data)
    .returningAll()
    .executeTakeFirstOrThrow();
}
