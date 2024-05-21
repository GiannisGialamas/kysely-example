import * as path from "path";
import chalk from "chalk";
import { db, logger, migrateToLatest } from "./lib";
import { insertUser } from "./repositories/users.repository";
import { insertTodo } from "./repositories/todos.repository";

(async () => {
  await migrateToLatest({
    db,
    migrationFolder: path.join(__dirname, "database/migrations"),
  });

  const user = await insertUser({
    name: "Giannis",
  });

  logger.info(`created user ${chalk.cyan(user.name)}`);

  const todo = await insertTodo({
    userId: user.id,
    content: "insert a new todo",
  });

  logger.info(
    `created todo ${chalk.green(todo.content)} for ${chalk.cyan(user.name)}`
  );
})();
