import styles from "./AddRemoveController.module.scss";
import {Button} from "antd";
import {MinusOutlined, PlusOutlined} from "@ant-design/icons";
import {FC} from "react";

interface ControllersProps {
    quantity: number
}

const AddRemoveControllers: FC<ControllersProps> = ({quantity}) => {

    const addItem = () => {
       quantity += 1
    }
    const removeItem = () => {
        quantity -= 1
    }

    return (
        <>
            <div className={styles.controllers}>
                <Button htmlType="button" onClick={() => addItem()}>

                    <div className={styles.icons}><MinusOutlined/></div>

                </Button>
                <span className={styles.counter}>{quantity}</span>

                <Button type="primary" htmlType="button" onClick={() => removeItem()}>
                    <div className={styles.icons}><PlusOutlined/></div>
                </Button>
            </div>
        </>
    );
};

export default AddRemoveControllers;