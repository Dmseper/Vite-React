import classes from "./HandBook.module.scss"
import { Item } from "../interfaces.ts"

interface PropType {
  item: Item
}

export default function ItemTitle({ item }: PropType) {
  return (
    item.name && (
      <div className={classes.itemTitle}>
        <img
          className={classes.itemImage}
          src={item.imgBase64}
          alt={item.name}
        />
        <span>{item.name}</span>
      </div>
    )
  )
}
