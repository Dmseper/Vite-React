import {FC, useState} from 'react'
import './App.scss'

import {Pizza} from "./components/interfaces";

import {PizzasDisplay} from "./components/pizzas-display/PizzasDisplay";
import {EditPizza} from "./components/edit-pizza-form/EditPizza";
import Navigation from "./components/common/navigation/Navigation";
import {dataPizzas} from "./DataPizzas";
import {FluentProvider, webDarkTheme} from "@fluentui/react-components";
const App: FC = () => {
  const [pizzasList, setPizzasList] = useState<Pizza[]>([...dataPizzas] as Pizza[])

  const savePizza = (newPizza: Pizza) => {

    if (!pizzasList.find(pizzaItem => pizzaItem.title === newPizza.title)) {
      setPizzasList([...pizzasList, newPizza])
      return
    }
    setPizzasList(pizzasList.map(oldVersionPizza => oldVersionPizza.title === newPizza.title ? newPizza : oldVersionPizza))
  }

  return (
    <FluentProvider theme={webDarkTheme}>
    <div className="app">
      <Navigation/>
      <div className="work-space">
        <EditPizza savePizza={savePizza}/>
        <PizzasDisplay pizzaList={pizzasList}/>
      </div>
    </div>
    </FluentProvider>
  )
}

export default App
