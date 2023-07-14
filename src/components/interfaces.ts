import {ROLES} from "./enums"
import {Dough, DrinkSize, PizzaSize, TypesRolls, TypesSnacks} from "./types"

export interface Item {
  id?: number
  name: string
  price: number | string
  description?: string
  weight?: number | string
  image?: string
  imgBase64?: string
  ingredients?: Ingredient[]

}

export interface Pizza extends Item {
  dough?: Dough
  size?: PizzaSize
  adds?: Ingredient[]
}

export interface Roll extends Item {
  type: TypesRolls
}

export interface Drink extends Item {
  size: DrinkSize
}

export interface Snacks extends Item {
  type: TypesSnacks
}


export interface Ingredient {
  id?: number
  name: string
  type: string
  addPrice?: number
}


export interface PizzasList {
  pizzasList: Pizza[]
}

export interface Menu {
  id: number
  title: string
  role: ROLES
  link: string
  isActive: boolean
}
