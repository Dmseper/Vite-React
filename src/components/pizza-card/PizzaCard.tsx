import { FC, useState } from "react"
import { PizzaCards } from "../interfaces"
import styles from "./PizzaCard.module.scss"
import { Button } from "antd"

export const PizzaCard: FC<PizzaCards> = ({ pizza }) => {
  const [counter, setCounter] = useState(0)

  const removePizza = () => {
    if (counter > 0) setCounter(counter - 1)
  }
  const addPizza = () => {
    setCounter(counter + 1)
  }
  return (
    <>
      <div className={`${styles.pizza} && ${counter ? styles.selected : ""}`}>
        <img
          src={pizza.imgBase64}
          alt={pizza.image}
        />
        <span className={styles.pizzaTittle}> {pizza.name}</span>
        <span>
          {pizza.price} $ / {pizza.weight} g.
        </span>

        <div className={styles.pizzaControllers}>
          <Button
            htmlType="button"
            onClick={() => removePizza()}
          >
            <div className={styles.icons}>
              {" "}
              <img
                src="/images/icons/remove.svg"
                alt=""
              />
            </div>
          </Button>
          <span className={styles.counter}>{counter}</span>

          <Button
            type="primary"
            htmlType="button"
            onClick={() => addPizza()}
          >
            <div className={styles.icons}>
              <img
                src="/images/icons/add.svg"
                alt=""
              />
            </div>
          </Button>
        </div>
      </div>
    </>
  )
}

export default PizzaCard
