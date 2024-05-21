import * as path from "path";
import { promises as fs } from "fs";
import {
  Migrator,
  FileMigrationProvider,
  MigratorProps,
  MigrationResult,
} from "kysely";
import { logger } from "./logger";
import chalk from "chalk";

interface MigrateOptions {
  db: MigratorProps["db"];
  migrationFolder: string;
}

function migrationResult(it: MigrationResult) {
  const messages: Record<MigrationResult["status"], string> = {
    NotExecuted: chalk.cyan("skipping: ") + it.migrationName,
    Success: chalk.green("migrated: ") + it.migrationName,
    Error: chalk.red("failed migrating: ") + it.migrationName,
  };

  logger.info(messages[it.status]);
}

export async function migrateToLatest({ db, migrationFolder }: MigrateOptions) {
  const migrator = new Migrator({
    db,
    provider: new FileMigrationProvider({ fs, path, migrationFolder }),
  });

  const { error, results } = await migrator.migrateToLatest();
  if (error) {
    logger.error("failed to run migrations: ", error);
    process.exit(1);
  }

  if (results?.length! < 1) {
    logger.info("Your database is already in sync ✅");
    return;
  }

  results?.forEach(migrationResult);

  logger.info(chalk.green("\nYour database in now in sync 🚀"));
}
