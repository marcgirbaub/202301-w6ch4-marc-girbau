import { Router } from "express";
import {
  createThing,
  deleteThing,
  getThing,
  getThings,
  modifyThing,
} from "../controllers/thingsControllers.js";

export const thingsRouter = Router();

thingsRouter.get("/things", getThings);
thingsRouter.get("/things/:idThing", getThing);
thingsRouter.delete("/things/:idThing", deleteThing);
thingsRouter.post("/things", createThing);
thingsRouter.put("/things", modifyThing);
