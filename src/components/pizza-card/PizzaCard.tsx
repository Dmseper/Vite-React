import {FC} from "react";
import {Pizza} from "../interfaces";
import styles from "./PizzaCard.module.scss"
import {useAppDispatch, useAppSelector} from "../../hooks.ts";
import {Button} from "antd";
import {addPizzaToPizzasCart, deletePizzaFromPizzasCart} from "../../store/PizzasCart.slice.ts";
import { Radio } from 'antd';
import {DOUGH, PIZZABASE, PIZZASIZENUMBER} from "../enums.ts";


interface PizzaCards {
    pizza: Pizza
}

export const PizzaCard: FC<PizzaCards> = ({pizza}) => {

    const dispatch = useAppDispatch()

    const pizzas = useAppSelector(state => state.pizzasCartStore).pizzasInCart

    const countPizzas = (pizzaName: string): number => {
        return pizzas.filter(pizzaItem => pizzaItem.name === pizzaName).length
    }


    const removePizza = (pizzaName: string) => {

        dispatch(deletePizzaFromPizzasCart(pizzaName))
    }
    const addPizza = (pizza: Pizza) => {
        dispatch(addPizzaToPizzasCart(pizza))
    }
    return (
        <>
            <div className={`${styles.pizza} && ${countPizzas(pizza.name) ? styles.selected : ""}`}>
                <img src={pizza.imgBase64} alt={pizza.image}/>
                <span className={styles.pizzaTittle}> {pizza.name}</span>
                <span>{pizza.price} $ / {pizza.weight} g.</span>

                <div className=""></div>
                <Radio.Group defaultValue="a" buttonStyle="solid">
                    <Radio.Button value="a">{PIZZABASE.CREAMY}</Radio.Button>
                    <Radio.Button value="b">{PIZZABASE.TOMATO}</Radio.Button>
                </Radio.Group>
                <Radio.Group defaultValue="a" buttonStyle="solid">
                    <Radio.Button value="b">{PIZZASIZENUMBER.Small}</Radio.Button>
                    <Radio.Button value="a">{PIZZASIZENUMBER.Default}</Radio.Button>
                    <Radio.Button value="c">{PIZZASIZENUMBER.Large}</Radio.Button>
                </Radio.Group>
                <Radio.Group defaultValue="a" buttonStyle="solid">
                    <Radio.Button value="a">{DOUGH.THICK}</Radio.Button>
                    <Radio.Button value="b">{DOUGH.THIN}</Radio.Button>
                </Radio.Group>
                <div className={styles.pizzaControllers}>
                    <Button htmlType="button" onClick={() => removePizza(pizza.name)}>

                        <div className={styles.icons}><img src="/images/icons/remove.svg" alt=""/></div>

                    </Button>
                    <span className={styles.counter}>{countPizzas(pizza.name)}</span>

                    <Button type="primary" htmlType="button" onClick={() => addPizza(pizza)}>
                        <div className={styles.icons}><img src="/images/icons/add.svg" alt=""/></div>
                    </Button></div>
            </div>
        </>
    )
}

export default PizzaCard
