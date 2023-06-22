import {FC, useState} from 'react'
import './App.scss'

import {Pizza} from "./components/interfaces";

import {PizzasDisplay} from "./components/pizzas-display/PizzasDisplay";
import {EditPizza} from "./components/edit-pizza-form/EditPizza";
import Navigation from "./components/common/navigation/Navigation";

const App: FC = () => {
  const [pizzasList, setPizzasList] = useState<Map<string ,Pizza>>(new Map())

  const savePizza = (newPizza: Pizza) => {

    setPizzasList(pizzasList.set(newPizza.title , newPizza))

    console.log("check",pizzasList)
  }

  return (
    <div className="app">
      <Navigation/>
      <div className="work-space">
        <EditPizza savePizza={savePizza}/>
        <PizzasDisplay pizzaList={[...pizzasList.values()]}/>
      </div>
    </div>
  )
}

export default App
