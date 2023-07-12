import classes from "./HandBook.module.scss"
import { Item } from "../interfaces.ts"

interface PropType {
  item: Item
}

export default function ItemTitle({ item }: PropType) {
  return (
    <div className={classes.pizzaTitle}>
      <img
        className={classes.pizzaImage}
        src={item.imgBase64}
        alt={item.name}
      />
      <span>{item.name}</span>
    </div>
  )
}
