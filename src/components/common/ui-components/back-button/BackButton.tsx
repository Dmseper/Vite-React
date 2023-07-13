import { useNavigate } from "react-router-dom"
import classes from "./BackButton.module.scss"

interface PropType {
  linkTo: string
  position: "right" | "left" | "center"
}
export default function BackButton({ linkTo, position }: PropType) {
  const navigate = useNavigate()
  const wrapperClass = (position: string): string => {
    if (position === "right") return `${classes.backWrapper}`
    else if (position === "left") return `${classes.backWrapper} ${classes.left}`
    else return `${classes.backWrapper} ${classes.center}`
  }
  return (
    <div className={wrapperClass(position)}>
      <span
        className={classes.back}
        onClick={() => navigate(linkTo)}
      >
        Back
      </span>
    </div>
  )
}
