import {FC} from "react";
import {Pizza, PizzaCards} from "../interfaces";
import {AiFillDelete, AiFillEdit} from "react-icons/ai"
import styles from "./PizzaCard.module.scss"
import {useAppDispatch} from "../../hooks.ts";
import {setEditPizza} from "../../store/EditPizza.slice.ts";
import {useNavigate} from 'react-router-dom';
import {deletePizzaFromPizzaList} from "../../store/PizzasList.slice.ts";

export const PizzaCard: FC<PizzaCards> = ({pizza}) => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()


  const handleEdit = (pizza: Pizza) => {
    dispatch(setEditPizza(pizza))
    navigate("/edit-pizza")
  }

  const handleDelete = (pizzaName: string) => {
    dispatch(deletePizzaFromPizzaList(pizzaName))
  }
  return (
    <>
      <div className={styles.pizza}>
        <img src={pizza.imgBase64} alt={pizza.image}/>
        <h2 className={styles.pizzaTittle}> {pizza.name}</h2>
        <span>{pizza.price} $</span>
        <span>{pizza.weight} g.</span>
        <div className={styles.pizzaControls}>
          <AiFillEdit onClick={() => handleEdit(pizza)}/>
          <AiFillDelete onClick={()=>handleDelete(pizza.name)}/>
        </div>
      </div>

    </>
  )
}

export default PizzaCard;
