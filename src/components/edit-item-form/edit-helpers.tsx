import { useAppSelector } from "../../hooks"

export const getItem = () => {
  const itemType = useAppSelector((state) => state.itemTypeStore).itemType
  let item = useAppSelector((state) => state.pizzaEditStore).pizza
  switch (itemType) {
    case "Pizza":
      item = useAppSelector((state) => state.pizzaEditStore).pizza
      break

    default:
      item = useAppSelector((state) => state.pizzaEditStore).pizza
      break
  }
  return item
}
