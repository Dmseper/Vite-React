export enum ROLES {
  ADMIN = "admin",
  USER = "user",
}

export enum APPMODULES {
  ADD_PIZZA = "ADD_PIZZA",
  MENU = "MENU",
  HANDBOOK = "HANDBOOK",
}

export enum DOUGH  {
  THIN = "Thin",
  THICK = "Thick",
}

export enum PIZZABASE {
  TOMATO = "Tomato",
  CREAMY = "Creamy",
}
export enum PIZZASIZE  {
  SMALL = "Small",
  DEFAULT = "Default",
  LARGE= "Large",
}
export const PIZZASIZENUMBER: Record<PIZZASIZE, string> = {
  [PIZZASIZE.DEFAULT]:  "33 cm" ,
  [PIZZASIZE.LARGE]: "40 cm",
  [PIZZASIZE.SMALL]:  "25 cm",
};



