import { ROLES } from "./enums";
import { Dough, ItemType, PizzaSize } from "./types";

export interface Item {
  id?: number;
  name: string;
  price: number | string;
  description?: string;
  weight?: number | string;
  image?: string;
  imgBase64?: string;
  type?: ItemType;
}
export interface Pizza extends Item {
  ingredients: Ingredient[];
  dough?: Dough;
  size?: PizzaSize;
  adds?: Ingredient[];
}


export interface Ingredient {
  id?: number;
  name: string;
  type: ItemType;
  addPrice?: number;
}


export interface ItemList {
  itemList: Item[];
}

export interface Menu {
  id: number;
  title: string;
  role: ROLES;
  link: string;
  isActive: boolean;
}
