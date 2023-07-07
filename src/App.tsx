import { FC } from "react"
import "./components/common/scss/App.scss"

import { Pizza } from "./components/interfaces"
import Navigation from "./components/common/navigation/Navigation"
import { dataPizzas } from "./DataPizzas"

import { setPizzasList } from "./store/PizzasList.slice.ts"
import { useAppDispatch, useAppSelector } from "./hooks.ts"
import AppRouter from "./components/AppRouter.tsx"

const App: FC = () => {
  const dispatch = useAppDispatch()

  dispatch(setPizzasList([...dataPizzas]))

  const pizzasList = useAppSelector((state) => state.pizzasListStore).pizzasList

  const savePizza = (newPizza: Pizza) => {
    if (!pizzasList.find((pizzaItem) => pizzaItem.name === newPizza.name)) {
      setPizzasList([...pizzasList, newPizza])
      return
    }
    setPizzasList(
      pizzasList.map((oldVersionPizza) =>
        oldVersionPizza.name === newPizza.name ? newPizza : oldVersionPizza
      )
    )
  }

  return (
    <div className="app">
      <Navigation />
      <div className="work-space">
        <AppRouter
          pizzasList={pizzasList}
          savePizza={savePizza}
        />
      </div>
    </div>
  )
}

export default App
