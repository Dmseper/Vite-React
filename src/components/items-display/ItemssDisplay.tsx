import { FC } from "react"
import { Item } from "../interfaces.ts"
import ItemCard from "../item-card/ItemCard.tsx"

import styles from "./ItemsDisplay.module.scss"
import { useAppSelector } from "../../hooks.ts"

export const ItemsDisplay: FC = () => {
  const itemList = useAppSelector((state) => state.itemsListStore).itemList

  return (
    <div className={styles.containerItems}>
      {itemList.map((item: Item) => {
        return <ItemCard item={item} key={item.name} />
      })}
    </div>
  )
}
