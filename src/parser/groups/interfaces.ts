import { coords } from "../../regex/interfaces";

export interface groupInformation {
    village: coords,
    groups: string[]
}

export interface groupsObj {
    data: groupInformation[];
    groups: string[];
    time: string;
  }