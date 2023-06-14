export interface Pizza {
  title: string
  price: number
  picture: string
}

export interface AddPizzaForm {
  addPizza: (newPizza: Pizza) => void
}

export interface PizzasDisp {
  pizzaList: Pizza[]
}
