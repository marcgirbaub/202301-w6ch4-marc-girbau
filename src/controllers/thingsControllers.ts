import { type Request, type Response } from "express";
import { things } from "../data/things.js";
import { type ThingsStrucutre } from "../types.js";

export const getThings = (
  req: Request<
    Record<string, unknown>,
    Record<string, unknown>,
    ThingsStrucutre
  >,
  res: Response
) => {
  res.status(200).json({ things });
};
