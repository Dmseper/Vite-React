import { FC, ReactNode } from "react"
import { Item } from "../interfaces.ts"
import styles from "./ItemCard.module.scss"
import { useAppDispatch, useAppSelector } from "../../hooks.ts"
import { Button } from "antd"
import {
  addItemToItemsCart,
  deleteItemFromItemsCart,
} from "../../store/ItemsCart.slice.ts"
import { PlusOutlined, MinusOutlined } from "@ant-design/icons"
import { getItemElements } from "./helpers.tsx"

interface ItemCards {
  item: Item
}

export const ItemCard: FC<ItemCards> = ({ item }) => {
  const dispatch = useAppDispatch()

  const items = useAppSelector((state) => state.itemsCartStore).itemsInCart
  const itemType = useAppSelector((state) => state.itemTypeStore).itemType

  const itemElements = getItemElements(itemType)

  const countItems = (itemName: string): number => {
    return items.filter((item: Item) => item.name === itemName).length
  }

  const removeItem = (itemName: string) => {
    dispatch(deleteItemFromItemsCart(itemName))
  }
  const addItem = (item: Item) => {
    dispatch(addItemToItemsCart(item))
  }
  return (
    <>
      <div
        className={`${styles.item} && ${
          countItems(item.name) ? styles.selected : ""
        }`}
      >
        <img src={item.imgBase64} alt={item.image} />
        <span className={styles.itemTittle}> {item.name}</span>
        <span>
          {item.price} $ / {item.weight} g.
        </span>

        <div className=""></div>
        {itemElements}
        <div className={styles.itemControllers}>
          <Button htmlType="button" onClick={() => removeItem(item.name)}>
            <div className={styles.icons}>
              <MinusOutlined />
            </div>
          </Button>
          <span className={styles.counter}>{countItems(item.name)}</span>

          <Button
            type="primary"
            htmlType="button"
            onClick={() => addItem(item)}
          >
            <div className={styles.icons}>
              <PlusOutlined />
            </div>
          </Button>
        </div>
      </div>
    </>
  )
}

export default ItemCard
