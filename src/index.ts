import "./loadEnvironment.js";
import express from "express";
import morgan from "morgan";
import createDebug from "debug";
import { thingsRouter } from "./routers/thingsRouters.js";

const port = process.env.PORT ?? 3000;

const debug = createDebug("things:root");

const app = express();

app.use(morgan("dev"));

app.use(express.json());

app.use("/", thingsRouter);

app.use((req, res) => {
  res.status(404).json({ error: "Endpoint not found" });
});

app.listen(port);
