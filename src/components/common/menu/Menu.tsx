import styles from "./Menu.module.scss"
import { NavLink } from "react-router-dom"

const Menu = () => {
  return (
    <div className={styles.menu}>
      <NavLink to="/">Menu</NavLink>
      <NavLink to="/handbook"> Handbook</NavLink>
    </div>
  )
}

export default Menu
