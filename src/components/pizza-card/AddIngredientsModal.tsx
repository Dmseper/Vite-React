
import{FC, useState} from 'react';
import { Button, Modal } from 'antd';
import {useAppSelector} from "../../hooks.ts";
import {Ingredient} from "../interfaces.ts";


const AddIngredientsModal: FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const ingredients = useAppSelector(state => state.ingredientsStore).ingredients

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <Button type="primary" onClick={showModal} style={{width: "fit-content",height: "fit-content", color: "white", fontSize: "14px"}}>
                add ingredients
            </Button>
            <Modal title="Adding Шngredients"
                   open={isModalOpen}
                   onOk={handleOk}
                   onCancel={handleCancel}>
                {ingredients.length && ingredients.map((item: Ingredient) => {
                  return item.name
                        // return <IngredientItem pizza={pizzaItem} key={pizzaItem.name}/>
                    }
                )}
            </Modal>
        </>
    );
};

export default AddIngredientsModal;