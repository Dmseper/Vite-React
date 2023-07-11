import {FC} from "react";
import {Pizza} from "../interfaces";
import PizzaCard from "../pizza-card/PizzaCard";

import styles from "./PizzasDisplay.module.scss"
import {useAppSelector} from "../../hooks.ts";


export const PizzasDisplay: FC = () => {

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