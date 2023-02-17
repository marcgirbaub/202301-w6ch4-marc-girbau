import "./loadEnvironment.js";
import express from "express";
import morgan from "morgan";
import createDebug from "debug";
import { thingsRouter } from "./routers/thingsRouters.js";
import inquirer, { type Answers } from "inquirer";
import questions from "./questions.js";
import { type AnswersQuestionnaire } from "./types.js";

export let isClientAuthorized: boolean;

const program = async () => {
  const answers = (await inquirer.prompt(questions)) as AnswersQuestionnaire;

  const port = answers.port ?? 4000;

  isClientAuthorized = answers.isClientAuthorized;

  const debug = createDebug("things:root");

  const app = express();

  app.use(morgan("dev"));

  app.use(express.json());

  app.use("/", thingsRouter);

  app.use((req, res) => {
    res.status(404).json({ error: "Endpoint not found" });
  });

  app.listen(port, () => {
    debug(`The server is served in port ${port}`);
  });
};

await program();
