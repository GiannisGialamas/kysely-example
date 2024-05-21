import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema
    .createTable("users")
    .addColumn("id", "integer", (cb) => {
      return cb.primaryKey().autoIncrement().notNull();
    })
    .addColumn("name", "text", (col) => col.notNull())
    .addColumn("created_at", "text", (col) => {
      return col.defaultTo(sql`CURRENT_TIMESTAMP`).notNull();
    })
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("users").execute();
}
