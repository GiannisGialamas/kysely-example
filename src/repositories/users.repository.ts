import { NewUser, User, UserUpdate } from "../database/tables";
import { db } from "../lib";

export async function insertUser(data: NewUser): Promise<User> {
  return await db
    .insertInto("users")
    .values(data)
    .returningAll()
    .executeTakeFirstOrThrow();
}

export async function updateUser(id: number, data: UserUpdate): Promise<User> {
  return await db
    .updateTable("users")
    .set(data)
    .where("id", "=", id)
    .returningAll()
    .executeTakeFirstOrThrow();
}
