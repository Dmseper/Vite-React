import { FC } from "react"
import { Item } from "../interfaces"
import styles from "./CartItem.module.scss"

interface PropType {
  item: Item
}
export const CartItem: FC<PropType> = ({ item }) => {
  return (
    <>
      <div className={styles.item}>
        <img src={item.imgBase64} alt={item.image} />
        <span> {item.name}</span>
        <span>{item.price} $</span>
      </div>
    </>
  )
}

export default CartItem
