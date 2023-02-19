const winston = require("winston");
require("winston-daily-rotate-file");

const levels = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  debug: 4,
};

const level = () => {
  const env = process.env.MODE || "development";
  const isDevelopment = env === "development";
  return isDevelopment ? "debug" : "warn";
};

const colors = {
  error: "red",
  warn: "yellow",
  info: "green",
  http: "magenta",
  debug: "white",
};

winston.addColors(colors);

const format = winston.format.combine(
  winston.format.timestamp({ format: "MMM-DD-YYYY HH:mm:ss" }),

  winston.format.align(),

  winston.format.colorize({ all: true }),

  winston.format.printf(
    (info) => `${info.level}: ${[info.timestamp]}: ${info.message}`
  )
);

const transports = [
  new winston.transports.Console(),

  new winston.transports.DailyRotateFile({
    level: "error",
    filename: "src/logs/%DATE%-error-logs.log",
    datePattern: "MMM-DD-YYYY",
    zippedArchive: true,
    maxSize: "20m",
    maxFiles: "30d",
  }),

  new winston.transports.DailyRotateFile({
    filename: "src/logs/%DATE%-combined-logs.log",
    datePattern: "MMM-DD-YYYY",
    zippedArchive: true,
    maxSize: "20m",
    maxFiles: "30d",
  }),
];

const logger = winston.createLogger({
  level: level(),
  levels,
  format,
  transports,
});

module.exports = logger;
