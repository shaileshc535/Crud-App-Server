"use strict";
const express = require("express");
const cors = require("cors");
const { config } = require("dotenv");
const swaggerDoc = require("swagger-ui-express");
const methodOverride = require("method-override");
const getConnection = require("./config/connection");
const swaggerDocumentation = require("./helper/documentations");
const Router = require("./routes/index");
const morganMiddleware = require("./middleware/morgan.middleware");
const logger = require("./utils/logger");

config();

const app = express();

app.use(morganMiddleware);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(methodOverride("X-HTTP-Method-Override"));

//DATABASE CONNECTION
app.use(getConnection);
app.use("/public", express.static("./public"));

//ROUTES
app.use("/docs", swaggerDoc.serve, swaggerDoc.setup(swaggerDocumentation));

app.get("/", (req, res) => {
  logger.info("Server Sent A Hello From Application!");
  res.send("Hello From Application!");
});

app.use("/", Router);

app.listen(process.env.PORT || 8080, () => {
  logger.info(
    `🚀 Server is running at (==> http://localhost:${process.env.PORT} on ${process.env.MODE} Mode <==`
  );
});
