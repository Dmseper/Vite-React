import {FC} from "react";
import {Pizza, PizzasDisp} from "../interfaces";
import PizzaCard from "../pizza-card/PizzaCard";

import styles from "./PizzasDisplay.module.scss"

export const PizzasDisplay: FC<PizzasDisp> = ({pizzaList}) => {
  return (
    <div className={styles.container}>
      {pizzaList.map((pizzaItem: Pizza) => {
          return <PizzaCard pizza={pizzaItem} key={pizzaItem.title}/>
        }
      )}
    </div>
  )
}