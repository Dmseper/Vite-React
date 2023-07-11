import {Roles} from "./enums";

export interface Pizza {
  id?: number
  name: string
  price: number | string
  description?: string
  weight?: number | string
  image?: string
  imgBase64?: string
}

export interface Ingredient {
  id?: number
  name: string
}


export interface PizzaCards {
  pizza: Pizza
}

export interface Menu {
  id: number
  title: string
  role: Roles
  link: string
  isActive: boolean
}
