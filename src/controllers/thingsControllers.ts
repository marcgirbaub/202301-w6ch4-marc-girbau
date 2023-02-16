import { type Request, type Response } from "express";
import { things } from "../data/things.js";

export const getThings = (req: Request, res: Response) => {
  res.status(200).json({ things });
};

export const getThing = (req: Request, res: Response) => {
  const { idThing } = req.params;

  const thing = things.find((thing) => thing.id === +idThing);

  res.status(200).json({ thing });
};

export const deleteThing = (req: Request, res: Response) => {
  const { idThing } = req.params;

  const newThings = things.filter((thing) => thing.id !== +idThing);

  const thingToDelete = things.find((thing) => thing.id === +idThing);
  const thingToDeletePosition = things.indexOf(thingToDelete!);
  things.splice(thingToDeletePosition, 1);

  res.status(200).json({ newThings });
};
