import { type Request, type Response } from "express";
import { things } from "../data/things.js";
import { type ThingStructure } from "../types.js";
import { isClientAuthorized } from "../index.js";

export const getThings = (req: Request, res: Response) => {
  res.status(200).json({ things });
};

export const getThing = (req: Request, res: Response) => {
  const { idThing } = req.params;

  const thing = things.find((thing) => thing.id === +idThing);

  res.status(200).json({ thing });
};

export const deleteThing = (req: Request, res: Response) => {
  if (!isClientAuthorized) {
    res.status(401).json({ error: "Unauthorized request" });

    return;
  }

  const { idThing } = req.params;

  const thingToDeletePosition = things.findIndex(
    (thing) => thing.id === +idThing
  );
  things.splice(thingToDeletePosition, 1);

  res.status(200).json({ things });
};

export const createThing = (
  req: Request<
    Record<string, unknown>,
    Record<string, unknown>,
    ThingStructure
  >,
  res: Response
) => {
  if (!isClientAuthorized) {
    res.status(401).json({ error: "Unauthorized request" });

    return;
  }

  const newThing = req.body;

  things.push({ ...newThing, id: Date.now() });

  res.status(201).json({ things });
};

export const modifyThing = (
  req: Request<
    Record<string, unknown>,
    Record<string, unknown>,
    ThingStructure
  >,
  res: Response
) => {
  if (!isClientAuthorized) {
    res.status(401).json({ error: "Unauthorized request" });

    return;
  }

  const { id, name } = req.body;

  const thingToModify = things.find((thing) => thing.id === id);

  if (!thingToModify) {
    res.status(404).json({ error: "Cannot find id" });

    return;
  }

  const thingToModifyPosition = things.indexOf(thingToModify);

  things[thingToModifyPosition].name = name ? name : thingToModify.name;

  res.status(201).json({ things });
};
