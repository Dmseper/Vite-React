import { ReactNode } from "react"
import PizzaElements from "../pizza/PizzaElements"
import { ItemType } from "../types"

export const getItemElements = (itemType: ItemType): ReactNode => {
  switch (itemType) {
    case "Pizza":
      return <PizzaElements />

    default:
      return <PizzaElements />
  }
}
