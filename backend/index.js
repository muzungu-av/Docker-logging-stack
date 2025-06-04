const express = require("express");
const logger = require("./logger");

const app = express();
const PORT = 5001;

app.get("/divide", (req, res) => {
  const { a, b } = req.query;

  // Пытаемся преобразовать a и b в числа
  const numA = Number(a);
  const numB = Number(b);

  // Проверка на NaN
  if (isNaN(numA) || isNaN(numB)) {
    logger.error(`Ошибка парсинга: a='${a}', b='${b}'`);
    return res.status(400).send("Обе переменные должны быть числами.");
  }

  // Проверка на деление на ноль
  if (numB === 0) {
    logger.error(`Ошибка деления на ноль: a=${numA}, b=${numB}`);
    return res.status(400).send("Деление на ноль невозможно.");
  }

  const result = numA / numB;
  logger.info(`Успешное деление: ${numA} / ${numB} = ${result}`);
  res.send(`Результат: ${result}`);
});

app.listen(PORT, () => {
  logger.info(`Backend running on port ${PORT}`);
});
