import {FC} from "react";
import {Pizza} from "../interfaces";
import PizzaCard from "../pizza-card/PizzaCard";

import styles from "./PizzasDisplay.module.scss"
import {useAppDispatch, useAppSelector} from "../../hooks.ts";
import {setPizzasList} from "../../store/PizzasList.slice.ts";
import {dataPizzas} from "../../DataPizzas.ts";

export const PizzasDisplay: FC = () => {

  const dispatch =  useAppDispatch()

  dispatch(setPizzasList([...dataPizzas]))

  const pizzasList = useAppSelector(state => state.pizzasListStore).pizzasList


  return (
    <div className={styles.containerPizzas}>
      {pizzasList.map((pizzaItem: Pizza) => {
          return <PizzaCard pizza={pizzaItem} key={pizzaItem.name}/>
        }
      )}
    </div>
  )
}