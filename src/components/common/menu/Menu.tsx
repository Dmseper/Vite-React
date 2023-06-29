import styles from "./Menu.module.scss"
const Menu = () => {
  return (
    <div className={styles.menu}>
      <ul >
        <li><button>Menu</button></li>
        <li><button>Add new pizza</button></li>
      </ul>
    </div>
  );
};

export default Menu;