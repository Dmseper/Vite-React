import {FC} from "react";
import {Pizza} from "../interfaces";
import styles from "./CartItem.module.scss"

interface PizzaItem {
    pizza: Pizza
}
export const CartItem: FC<PizzaItem> = ({pizza}) => {

    return (
        <>
            <div className={styles.pizzaItem}>
                <img src={pizza.imgBase64} alt={pizza.image}/>
                <span className={styles.pizzaTittle}> {pizza.name}</span>
                <span >{pizza.price} $</span>

            </div>

        </>
    )
}

export default CartItem;
