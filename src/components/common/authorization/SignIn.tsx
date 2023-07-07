import { useState } from "react"
import classes from "./SignIn.module.scss"
import AuthForm from "./AuthForm"

export default function SignIn() {
  const [modalOpen, setAuthOpen] = useState(false)

  const showAuthorization = () => {
    setAuthOpen(true)
  }
  return (
    <div className={classes.wrapper}>
      <h3
        className={classes.inner}
        onClick={showAuthorization}
      >
        Sign in
      </h3>

      <AuthForm
        open={modalOpen}
        onCancel={() => setAuthOpen(false)}
      />
    </div>
  )
}
