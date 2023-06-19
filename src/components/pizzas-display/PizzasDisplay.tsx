import {FC} from "react";
import {Pizza,PizzasDisp} from "../interfaces";
import PizzaCard from "../pizza-card/PizzaCard";

export const PizzasDisplay: FC<PizzasDisp> = ({pizzaList}) => {
  return (
      <div className="container">
        {pizzaList.length && pizzaList.map((pizzaItem: Pizza) => {
            return <PizzaCard pizza={pizzaItem}/>
          }
        )}
      </div>
  )
}