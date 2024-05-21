import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema
    .createTable("todos")
    .addColumn("id", "integer", (cb) => {
      return cb.primaryKey().autoIncrement().notNull();
    })
    .addColumn("user_id", "integer", (col) => {
      return col.references("users.id").notNull().onDelete("cascade");
    })
    .addColumn("content", "text", (col) => col.notNull().unique())
    .addColumn("completed", "integer", (col) => col.notNull().defaultTo(0))
    .addColumn("created_at", "text", (col) => {
      return col.defaultTo(sql`CURRENT_TIMESTAMP`).notNull();
    })
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("todos").execute();
}
