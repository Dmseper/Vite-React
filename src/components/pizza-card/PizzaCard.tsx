import {FC, useState} from "react";
import {Ingredient, Pizza} from "../interfaces";
import styles from "./PizzaCard.module.scss"
import {useAppDispatch, useAppSelector} from "../../hooks.ts";
import {Button, Radio} from "antd";
import {DOUGH, PIZZABASE, PIZZASIZENUMBER} from "../enums.ts";
import {MinusOutlined, PlusOutlined} from "@ant-design/icons"
import AddIngredientsModal from "./AddIngredientsModal.tsx";
import AddRemoveControllers from "../common/ui-components/add-remove-controller/AddRemoveControllers.tsx";
import {dataPizzas} from "../../DataPizzas.ts";

interface PizzaCards {
    pizza: Pizza
}

export const PizzaCard: FC<PizzaCards> = ({pizza}) => {

    const dispatch = useAppDispatch()
    const [counter,setCounter] = useState(0)
    // const pizzas = useAppSelector(state => state.CartStore).pizzasInCart
    const pizzas =[...dataPizzas] as Pizza[]
    const countPizzas = (pizzaName: string): number => {
        return 10
        // return pizzas.filter(pizzaItem => pizzaItem.name === pizzaName).length
    }


    const removePizza = (pizzaName: string) => {


    }
    const addPizza = (pizza: Pizza) => {

    }
    const onFinish = (values: any) => {
        console.log('Received values of form: ', values);
    };

    return (
        <>

            {/*<Form*/}
            {/*    name="validate_other"*/}
            {/*    onFinish={onFinish}*/}
            {/*    style={{ maxWidth: 600 }}*/}
            {/*>*/}

            {/*    <Form.Item*/}
            {/*        name="radio-button"*/}
            {/*        label="Radio.Button"*/}
            {/*        rules={[{ required: true, message: 'Please pick an item!' }]}*/}
            {/*    >*/}
            {/*        <Radio.Group>*/}
            {/*            <Radio.Button value="a">item 1</Radio.Button>*/}
            {/*            <Radio.Button value="b">item 2</Radio.Button>*/}
            {/*            <Radio.Button value="c">item 3</Radio.Button>*/}
            {/*        </Radio.Group>*/}
            {/*    </Form.Item>*/}


            {/*    <Form.Item wrapperCol={{ span: 12, offset: 6 }}>*/}
            {/*        <Space>*/}
            {/*            <Button type="primary" htmlType="submit">*/}
            {/*                Submit*/}
            {/*            </Button>*/}
            {/*            <Button htmlType="reset">reset</Button>*/}
            {/*        </Space>*/}
            {/*    </Form.Item>*/}
            {/*</Form>*/}


            <div className={`${styles.pizza} && ${countPizzas(pizza.name) ? styles.selected : ""}`}>
                <img src={pizza.imgBase64} alt={pizza.image}/>
                <span className={styles.pizzaTittle}> {pizza.name}</span>
                <span>{pizza.ingredients?.map((item: Ingredient, index: number) => {
                    return `${item.name.toLowerCase()}` + `${index === pizza.ingredients!.length - 1 ? "" : " / "}`
                })
                }</span>
                <div className=""><AddIngredientsModal/></div>



                <Radio.Group defaultValue="a" buttonStyle="solid">
                    <Radio.Button value="b">{PIZZASIZENUMBER.Small}</Radio.Button>
                    <Radio.Button value="a">{PIZZASIZENUMBER.Default}</Radio.Button>
                    <Radio.Button value="c">{PIZZASIZENUMBER.Large}</Radio.Button>
                </Radio.Group>

                <Radio.Group defaultValue="a" buttonStyle="solid">
                    <Radio.Button value="a" className={"large"}>{PIZZABASE.CREAMY}</Radio.Button>
                    <Radio.Button value="b" className={"large"}>{PIZZABASE.TOMATO}</Radio.Button>
                </Radio.Group>
                <Radio.Group defaultValue="a" buttonStyle="solid">
                    <Radio.Button value="a" className={"large"}>{DOUGH.THICK}</Radio.Button>
                    <Radio.Button value="b" className={"large"}>{DOUGH.THIN}</Radio.Button>
                </Radio.Group>



                <AddRemoveControllers quantity={counter}/>
            </div>
        </>
    )
}

export default PizzaCard
