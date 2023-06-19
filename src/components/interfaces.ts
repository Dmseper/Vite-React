import {Roles} from "./enums";

export interface Pizza {
  id?: number
  title: string
  price: number | string
  description?: string
  weight?: number
  image?: string
  fullSizeImage?: string
}

export interface Ingredient {
  id?: number
  name: string
}

export interface EditPizzaForm {
  pizza: Pizza
  savePizza: (newPizza: Pizza) => void
}

export interface PizzasDisp {
  pizzaList: Pizza[]
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
