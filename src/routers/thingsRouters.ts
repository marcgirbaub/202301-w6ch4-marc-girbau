import { Router } from "express";
import {
  deleteThing,
  getThing,
  getThings,
} from "../controllers/thingsControllers.js";

export const thingsRouter = Router();

thingsRouter.get("/things", getThings);
thingsRouter.get("/things/:idThing", getThing);
thingsRouter.delete("/things/:idThing", deleteThing);
