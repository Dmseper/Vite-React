import styles from "./Menu.module.scss"
import {Link} from "react-router-dom";

const Menu = () => {
  return (
    <div className={styles.menu}>
      <ul>
        <li>
          <Link to='/'>Menu</Link>
        </li>
        <li>
          <Link to='/edit-pizza'>Add new pizza</Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;