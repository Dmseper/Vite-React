import Menu from "../menu/Menu"
import SignIn from "../authorization/SignIn"
import styles from "./Navigation.module.scss"
import { Switch, Tooltip } from "antd"

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
      <Switch checkedChildren="Night" unCheckedChildren="Day" defaultChecked />
      <Tooltip title={<WorkingTimeContent/>}>
        <span className={styles.timePopper}>Working Time</span>
      </Tooltip>

      <div className={styles.logo}>Noir Pizza</div>
      <div>
        <Menu />
      </div>
      <SignIn />
    </div>
  )
}

export default Navigation
