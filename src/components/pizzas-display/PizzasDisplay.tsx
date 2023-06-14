import {FC} from "react";
import {Pizza, PizzasDisp} from "../interfaces";

export const PizzasDisplay: FC<PizzasDisp> = ({pizzaList}) => {
  return (
    <>
      <div className="container">
        {pizzaList.length && pizzaList.map(pizza => {
          return <h1>{pizza.title}</h1>
        })}
      </div>
    </>)
}