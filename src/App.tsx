import { FC } from "react"
import "./components/common/scss/App.scss"
import Navigation from "./components/common/navigation/Navigation"
import AppRouter from "./components/AppRouter.tsx"

const App: FC = () => {


  return (
    <div className="app">
      <Navigation />
      <div className="work-space">
        <AppRouter/>
      </div>
    </div>
  )
}

export default App
