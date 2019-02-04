const express = require("express");
const app = express();

const morgan = require("morgan");
const bodyParser = require("body-parser");
const session = require("client-sessions");

const chalk = require("chalk");

const router = require("./server/routes");

app.use(morgan("dev"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(
  session({
    cookieName: "session",
    secret: `${process.env.SECRET}`,
    duration: 30 * 60 * 1000,
    activeDuration: 5 * 60 * 100
  })
);

app.use(express.static("server/templates"));
app.use(express.static("browser/public"));

app.use("/", router);

app.listen(process.env.PORT || 3001, () => {
  console.log(chalk.blue(`App is listening to port ${this.address().port}`));
});
