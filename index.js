const app = require("express")();

const PORT = 3000;
const developmentMode = process.env.NODE_ENV === "development";

const pinoConfig = {
  colorize: true,
};
const pino = require("pino")({
  prettyPrint: developmentMode ? pinoConfig : false,
});
const expressPino = require("express-pino-logger")({
  logger: pino,
});

app.use(expressPino);

app.get("/status", function (req, res) {
  res.send({
    status: "OK",
  });
});

app.listen(PORT, () => pino.info(`🚢 Server ready at http://localhost:${PORT}`));
