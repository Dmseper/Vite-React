import Menu from "../menu/Menu";
import styles from './Navigation.module.scss'
import {Button, Popover, PopoverSurface, PopoverTrigger,} from "@fluentui/react-components";


const WorkingTimeContent = () => {
  return (
    <div>
      <h3 className={styles.contentHeader}> Fri-Sat: 10.00 - 24.00 Sun-Thu: 10.00 - 23.00</h3>
    </div>
  )
}


const Navigation = () => {
  return (
    <div className={styles.navigation}>
      <div className={styles.working}>
        <Popover>
          <PopoverTrigger >
            <Button >
              <div className={styles.trigger}>
                <h3>Working Time</h3>
                <div>(click here)</div>
              </div>
            </Button>

          </PopoverTrigger>
          <PopoverSurface>
            <WorkingTimeContent/>
          </PopoverSurface>
        </Popover>
      </div>
      <div className={styles.logo}><img src="/logo.png" alt=""/></div>
      <div><Menu/></div>
    </div>
  )
}

export default Navigation;
