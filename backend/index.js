const express = require("express");
const logger = require("./logger");

const app = express();
const PORT = 5000;

app.get("/", (req, res) => {
  logger.info("Hello from backend!");
  res.send("Hello from backend!");
});

app.listen(PORT, () => {
  logger.info(`Backend running on port ${PORT}`);
});
