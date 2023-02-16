import { Router } from "express";
import { getThing, getThings } from "../controllers/thingsControllers.js";

export const thingsRouter = Router();

thingsRouter.get("/things", getThings);
thingsRouter.get("/things/:idThing", getThing);
