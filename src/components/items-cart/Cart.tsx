import {FC, useState} from "react";
import {Popover} from 'antd';
import styles from "./Cart.module.scss"
import {useAppSelector} from "../../hooks.ts";
import {Pizza} from "../interfaces.ts";
import {CartItem} from "./CartItem.tsx";
import {dataPizzas} from "../../DataPizzas.ts";

export const Cart: FC = () => {

    const cart = useAppSelector(state => state.CartStore)
    const [open, setOpen] = useState(false);

    const handleOpenChange = (newOpen: boolean) => {
        setOpen(newOpen);
    };



    return (
        <Popover
            content={cart.totalItemCounter ?
                <PizzasCartList totalPrice={cart.totalPrice} pizzas={[...dataPizzas]}/> : ""}
            title={false}
            trigger="click"
            open={open}
            onOpenChange={handleOpenChange}
        >
            <div className={styles.cart} style={{cursor: "pointer",}}>
                <img src="/images/icons/shopping_cart_icon.svg" alt="cart-icon"/> <sup>{cart.totalPrice}</sup>
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