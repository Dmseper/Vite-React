import Menu from "../menu/Menu"
import SignIn from "../authorization/SignIn"
import styles from "./Navigation.module.scss"
import {Tooltip} from "antd"
import {PizzasCart} from "../../pizzas-cart/PizzasCart.tsx";

const WorkingTimeContent = () => {
    return (
        <div>
            <span className={styles.contentHeader}>Fri - Sat: 10.00 - 24.00 </span>
            <span className={styles.contentHeader}>Sun - Thu: 10.00 - 23.00</span>
        </div>
    )
}

const Navigation = () => {
    return (
        <div className={styles.navigation}>
            <Tooltip title={<WorkingTimeContent/>}>
                <span className={styles.timePopper}>Working Time</span>
            </Tooltip>
            <div></div>
            <div className={styles.logo}>Noir Pizza</div>
            <Menu/>
            <div style={{display: "flex", flexDirection: "row", paddingLeft: "20px"}}>
                <PizzasCart/>
                <SignIn/>
            </div>

        </div>
    )
}

export default Navigation
