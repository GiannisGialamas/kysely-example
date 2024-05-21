import winston from "winston";

export const logger = winston.createLogger({
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.printf(({ level, message }) => {
      return `${level.toUpperCase()} ${message}`;
    })
  ),
  transports: [new winston.transports.Console()],
});
