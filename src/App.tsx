import {FC} from 'react'
import './App.scss'

import {Pizza} from "./components/interfaces";

import {PizzasDisplay} from "./components/pizzas-display/PizzasDisplay";
import {EditPizza} from "./components/edit-pizza-form/EditPizza";
import Navigation from "./components/common/navigation/Navigation";
import {dataPizzas} from "./DataPizzas";

import {setPizzasList} from "./store/PizzasList.slice.ts";
import {useAppDispatch, useAppSelector} from "./hooks.ts";
import {Routes, Route} from "react-router-dom";

const App: FC = () => {
  const dispatch = useAppDispatch()

  dispatch(setPizzasList([...dataPizzas]))

  const pizzasList = useAppSelector(state => state.pizzasListStore).pizzasList


  const savePizza = (newPizza: Pizza) => {

    if (!pizzasList.find(pizzaItem => pizzaItem.title === newPizza.title)) {
      setPizzasList([...pizzasList, newPizza])
      return
    }
    setPizzasList(pizzasList.map(oldVersionPizza => oldVersionPizza.title === newPizza.title ? newPizza : oldVersionPizza))
  }

  return (

      <div className="app">
        <Navigation/>
        <Routes>
          <Route path="/" element={  <PizzasDisplay pizzaList={pizzasList}/>}/>
          <Route path="/edit-pizza" element={ <EditPizza savePizza={savePizza}/>}/>
        </Routes>

      </div>

  )
}

export default App
