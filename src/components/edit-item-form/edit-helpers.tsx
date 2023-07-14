import { useAppSelector } from "../../hooks"

export const getItem = () => {
  const itemType = useAppSelector((state) => state.itemTypeStore).itemType
  let item = useAppSelector((state) => state.itemEditStore).item
  switch (itemType) {
    case "Pizza":
      item = useAppSelector((state) => state.itemEditStore).item
      break

    default:
      item = useAppSelector((state) => state.itemEditStore).item
      break
  }
  return item
}
