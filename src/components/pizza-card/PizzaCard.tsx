import {FC, useState} from "react";
import {PizzaCards} from "../interfaces";
import {AiFillDelete, AiFillEdit} from "react-icons/ai"
import styles from "./PizzaCard.module.scss"
import {EditPizza} from "../edit-pizza-form/EditPizza";

export const PizzaCard: FC<PizzaCards> = ({pizza}) => {

  const [edit, setEdit] = useState<boolean>(false)

  const handleEdit = () => {
    setEdit(!edit)
  }
  const handleDelete = () => {
    console.log("asda")
  }
  return (
    <>
      <div className={styles.pizza}>
        <img src={pizza.image} alt={pizza.image}/>
        <h2 className={styles.pizzaTittle}> {pizza.name}</h2>
        <span>{pizza.price} $</span>
        <span>{pizza.weight} g.</span>
        <div className={styles.pizzaControls}>
          <AiFillEdit onClick={handleEdit}/>
          <AiFillDelete onClick={handleDelete}/>
        </div>
      </div>

      {
        edit ? <EditPizza pizza={pizza}/> : null
      }

    </>
  )
}

export default PizzaCard;
