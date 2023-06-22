import {FC} from "react";
import {Pizza,PizzasDisp} from "../interfaces";
import PizzaCard from "../pizza-card/PizzaCard";

export const PizzasDisplay: FC<PizzasDisp> = ({pizzaList}) => {
  console.log("pizzalIST", pizzaList)
  return (
      <div className="container">

        {pizzaList.map((pizzaItem: Pizza) => {
            return pizzaItem.title
          }
        )}
      </div>
  )
}