const { createLogger, format, transports } = require("winston");
const path = require("path");

const logDir = "/var/log/backend";

const logger = createLogger({
  level: "info",
  format: format.combine(
    format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
    format.printf(({ level, message, timestamp }) => {
      return `${timestamp} [${level.toUpperCase()}]: ${message}`;
    })
  ),
  transports: [
    // 1) Console-транспорт — уходит и в stdout (Promtail его подхватывает)
    new transports.Console(),

    // 2) File-транспорт — пишет в app.log внутри /var/log/backend
    new transports.File({
      filename: path.join(logDir, "app.log"),
      maxsize: 5 * 1024 * 1024, // 5 MB на файл
      maxFiles: 5, // хранить 5 ротаций
    }),
  ],
  exceptionHandlers: [
    new transports.File({ filename: path.join(logDir, "exceptions.log") }),
  ],
});

module.exports = logger;
