import Menu from "../menu/Menu";
import styles from './Navigation.module.scss'

const Navigation = () => {
  return (
    <div className={styles.navigation}>
        <div className="contacts"></div>
        <div className="working">
          Fri-Sat: 10.00 - 24.00 Sun-Thu: 10.00 - 23.00</div>
        <div className={styles.logo}><img src="/logo.png" alt=""/></div>
        <div><Menu/></div>
    </div>
  );
};

export default Navigation;
