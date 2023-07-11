import {FC} from "react";
import {Popconfirm} from 'antd';
import styles from "./PizzaCard.module.scss"

export const PizzasCart: FC = () => {
  const confirm = () =>
    new Promise((resolve) => {
      setTimeout(() => resolve(null), 3000);
    });


  return (
    <Popconfirm title="Total"
                description="Open Popconfirm with Promise"
                onConfirm={confirm}
                icon={false}
    >
      <div className={styles.cart} style={{cursor: "pointer",}}>
        <img src="/images/icons/shopping_cart_icon.svg" alt="cart-icon" /> <sup>100</sup>
      </div>
    </Popconfirm>

  )
}