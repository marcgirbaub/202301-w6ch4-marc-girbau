import { type Answers } from "inquirer";

export interface ThingStructure {
  id: number;
  name: string;
}

export type ThingsStrucutre = ThingStructure[];

export interface AnswersQuestionnaire extends Answers {
  port: number;
  isClientAuthorized: boolean;
}
