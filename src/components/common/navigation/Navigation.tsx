import Menu from "../menu/Menu";
import styles from './Navigation.module.scss'
import {Tooltip} from "antd";


const WorkingTimeContent = () => {
  return (
    <div>
      <h4 className={styles.contentHeader}>Fri - Sat: 10.00 - 24.00 </h4>
      <h4 className={styles.contentHeader}>Sun - Thu: 10.00 - 23.00</h4>
    </div>
  )
}


const Navigation = () => {
  return (
    <div className={styles.navigation}>
      <div className={styles.working}>

        <div className={styles.trigger}>
          <Tooltip title={<WorkingTimeContent/>}>
            <h3>Working Time</h3>
          </Tooltip>
        </div>

      </div>
      <div className={styles.logo}>Noir Pizza</div>
      <div><Menu/></div>
    </div>
  )
}

export default Navigation;
