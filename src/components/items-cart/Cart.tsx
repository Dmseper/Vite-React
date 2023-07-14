import { FC, useState } from "react"
import { Popover } from "antd"
import styles from "./Cart.module.scss"
import { useAppSelector } from "../../hooks.ts"
import { Item } from "../interfaces.ts"
import { CartItem } from "./CartItem.tsx"

export const Cart: FC = () => {
  const cart = useAppSelector((state) => state.itemsCartStore)
  const [open, setOpen] = useState(false)
  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen)
  }

  return (
    <Popover
      content={
        cart.totalItemsCounter ? (
          <ItemsCartList
            totalPrice={cart.totalPrice}
            items={cart.itemsInCart}
          />
        ) : (
          ""
        )
      }
      title={false}
      trigger="click"
      open={open}
      onOpenChange={handleOpenChange}
    >
      <div className={styles.cart} style={{ cursor: "pointer" }}>
        <img src="/images/icons/shopping_cart_icon.svg" alt="cart-icon" />{" "}
        <sup>{cart.totalItemsCounter}</sup>
      </div>
    </Popover>
  )
}

interface CartList {
  items: Item[]
  totalPrice: number
}

const ItemsCartList: FC<CartList> = ({ items, totalPrice }) => {
  return (
    <>
      <div>
        {items.length &&
          items.map((item: Item, index: number) => {
            return <CartItem item={item} key={index} />
          })}
      </div>
      <div className={styles.itemPrice}>Total: {totalPrice} $</div>
    </>
  )
}
