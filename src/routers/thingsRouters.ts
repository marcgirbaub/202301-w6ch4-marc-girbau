import { Router } from "express";
import { getThings } from "../controllers/thingsControllers.js";

export const thingsRouter = Router();

thingsRouter.get("/things", getThings);
