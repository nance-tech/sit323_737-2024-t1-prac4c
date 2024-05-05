const app = require("express")();
const logger = require("./logger");

app.get("", (_, res) => {
  logger.info("health checking endpoint")
  res.status(200).json({ message: "Calculator Microservice Running" });
});

// Addition
app.get("/add/:num1/:num2", (req, res) => {
  let { num1, num2 } = req.params;

  logger.info(`New addition operation has been requested: ${num1} + ${num2}`);
  num1 = Number(num1);
  num2 = Number(num2);
  let errorMsg = undefined;
  
  if (isNaN(num1)) {
    errorMsg = "Num1 Must be a Number";
  }
  if (isNaN(num2)) {
    errorMsg = "Num2 Must be a Number";
  }

  if (errorMsg) {
    logger.error(`An error has been encountered: ${errorMsg}`);
    return res.status(400).json({ error: errorMsg });
  }
  const result = Number(num1) + Number(num2);
  return res.status(200).json({ result });
});

// Subtraction
app.get("/subtract/:num1/:num2", (req, res) => {
  let { num1, num2 } = req.params;
  logger.info(
    `New subtraction operation has been requested: ${num1} - ${num2}`
  );
  num1 = Number(num1);
  num2 = Number(num2);
  let errorMsg = undefined;
  
  if (isNaN(num1)) {
    errorMsg = "Num1 Must be a Number";
  }
  if (isNaN(num2)) {
    errorMsg = "Num2 Must be a Number";
  }

  if (errorMsg) {
    logger.error(`An error has been encountered: ${errorMsg}`);
    return res.status(400).json({ error: errorMsg });
  }
  const result = Number(num1) - Number(num2);
  return res.status(200).json({ result });
});

// Multiplication
app.get("/multiply/:num1/:num2", (req, res) => {
  let { num1, num2 } = req.params;
  logger.info(
    `New multiplication operation has been requested: ${num1} * ${num2}`
  );
  num1 = Number(num1);
  num2 = Number(num2);
  let errorMsg = undefined;
 
  if (isNaN(num1)) {
    errorMsg = "Num1 Must be a Number";
  }
  if (isNaN(num2)) {
    errorMsg = "Num2 Must be a Number";
  }
  if (errorMsg) {
    logger.error(`An error has been encountered: ${errorMsg}`);
    return res.status(400).json({ error: errorMsg });
  }
  const result = num1 * num2;
  return res.status(200).json({ result });
});

// Division
app.get("/divide/:num1/:num2", (req, res) => {
  let { num1, num2 } = req.params;
  logger.info(`New division operation has been requested: ${num1} / ${num2}`);
  num1 = Number(num1);
  num2 = Number(num2);
  let errorMsg = undefined;

  if (isNaN(num1)) {
    errorMsg = "Num1 Must be a Number";
  }
  if (isNaN(num2)) {
    errorMsg = "Num2 Must be a Number";
  }
  if (num2 === 0) {
    errorMsg = "You cannot divide a number by Zero";
  }

  if (errorMsg) {
    logger.error(`An error has been encountered: ${errorMsg}`);
    return res.status(400).json({ error: errorMsg });
  }
  const result = Number(num1) / Number(num2);
  return res.status(200).json({ result });
});

app.listen(4000, () => {
  logger.info("Microservice running at http://localhost:4000");
});
