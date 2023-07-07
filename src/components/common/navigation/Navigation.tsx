import Menu from "../menu/Menu"
import SignIn from "../authorization/SignIn"
import styles from "./Navigation.module.scss"
import { Switch, Tooltip } from "antd"

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
      <Switch
        checkedChildren="Night"
        unCheckedChildren="Day"
        defaultChecked
      />
      <Tooltip title={<WorkingTimeContent />}>
        <h3>Working Time</h3>
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
