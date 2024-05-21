import SQLite from "better-sqlite3";
import { CamelCasePlugin, Kysely, SqliteDialect } from "kysely";
import { Database } from "../database";

const dialect = new SqliteDialect({
  database: new SQLite(":memory:"),
});

export const db = new Kysely<Database>({
  dialect,
  plugins: [new CamelCasePlugin()],
});
