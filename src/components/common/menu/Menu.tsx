import styles from "./Menu.module.scss"
import {Link} from "react-router-dom";

const Menu = () => {
  return (
    <div className={styles.menu}>
      <Link to='/'><h3>Menu</h3></Link>
      <Link to='/edit-pizza'> <h3>Add Pizza</h3></Link>
    </div>
  );
};

export default Menu;