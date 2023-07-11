import {FC, useState} from "react";
import {Pizza, PizzaCards} from "../interfaces";
import {AiFillDelete, AiFillEdit} from "react-icons/ai"
import styles from "./PizzaCard.module.scss"
import {useAppDispatch} from "../../hooks.ts";
import {setEditPizza} from "../../store/EditPizza.slice.ts";
import {useNavigate} from 'react-router-dom';
import {deletePizzaFromPizzaList} from "../../store/PizzasList.slice.ts";
import {Button} from "antd";

export const PizzaCard: FC<PizzaCards> = ({pizza}) => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const [counter, setCounter] = useState(0)

    const handleEdit = (pizza: Pizza) => {
        dispatch(setEditPizza(pizza))
        navigate("/edit-pizza")
    }

    const handleDelete = (pizzaName: string) => {
        dispatch(deletePizzaFromPizzaList(pizzaName))
    }


    const removePizza = () => {
        if (counter > 0)
            setCounter(counter - 1)
    }
    const addPizza = () => {
        setCounter(counter + 1)
    }
    return (
        <>
            <div className={`${styles.pizza} && ${counter ? styles.selected : ""}`}>
                <img src={pizza.imgBase64} alt={pizza.image}/>
                <span className={styles.pizzaTittle}> {pizza.name}</span>
                <span>{pizza.price} $ / {pizza.weight} g.</span>
                <div className={styles.pizzaControls}>
                    <AiFillEdit onClick={() => handleEdit(pizza)}/>
                    <AiFillDelete onClick={() => handleDelete(pizza.name)}/>
                </div>
                <div className={styles.pizzaControllers}>
                    <Button htmlType="button" onClick={() => removePizza()}>

                        <div className={styles.icons}>  <img src="/images/icons/remove.svg" alt=""/></div>

                    </Button>
                    <span className={styles.counter}>{counter}</span>

                    <Button type="primary" htmlType="button" onClick={() => addPizza()}>
                        <div className={styles.icons}><img src="/images/icons/add.svg" alt=""/></div>

                    </Button></div>


            </div>

        </>
    )
}

export default PizzaCard;
