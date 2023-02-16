import "./loadEnvironment.js";
import express from "express";

const port = process.env.PORT ?? 3000;

const app = express();

app.get("/", (req, res) => {
  res.status(200).json({});
});

app.listen(port);
