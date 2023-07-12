import {FC, useState} from "react";
import {Popover} from 'antd';
import styles from "./Cart.module.scss"
import {useAppSelector} from "../../hooks.ts";
import {Pizza} from "../interfaces.ts";
import {CartItem} from "./CartItem.tsx";

export const Cart: FC = () => {

    const cart = useAppSelector(state => state.pizzasCartStore)
    const [open, setOpen] = useState(false);

    const handleOpenChange = (newOpen: boolean) => {
        setOpen(newOpen);
    };


    return (
        <Popover
            content={cart.totalPizzasCounter ?
                <PizzasCartList totalPrice={cart.totalPrice} pizzas={cart.pizzasInCart}/> : ""}
            title={false}
            trigger="click"
            open={open}
            onOpenChange={handleOpenChange}
        >
            <div className={styles.cart} style={{cursor: "pointer",}}>
                <img src="/images/icons/shopping_cart_icon.svg" alt="cart-icon"/> <sup>{cart.totalPizzasCounter}</sup>
            </div>
        </Popover>
    )
}

interface CartList {
    pizzas: Pizza[]
    totalPrice: number
}

const PizzasCartList: FC<CartList> = ({pizzas, totalPrice}) => {


    return (
        <>
            <div className={styles.containerPizzas}>
                {pizzas.length && pizzas.map((pizzaItem: Pizza) => {


                        return <CartItem pizza={pizzaItem} key={pizzaItem.name}/>
                    }
                )}
            </div>
            <div className={styles.pricePizzas}>
                Total: {totalPrice} $
            </div>


        </>
    )
}