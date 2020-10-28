const app = require("express")();
const { Graph } = require("./src/middleware");

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

app.get("/graph", function (req, res) {
  const graph = new Graph("My graph");
  const pageOne = graph.addPage({ id: "page-1", title: "Page 1" });
  const pageTwo = graph.addPage({ id: "page-2", title: "Page 2" })
  graph.addRule("rule-1", pageOne, pageTwo)
  console.log(pageOne.getReachablePages());
});

app.listen(PORT, () =>
  pino.info(`🚢 Server ready at http://localhost:${PORT}`)
);
