import {FC} from 'react'
import './components/common/scss/App.scss'

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

    if (!pizzasList.find(pizzaItem => pizzaItem.name === newPizza.name)) {
      setPizzasList([...pizzasList, newPizza])
      return
    }
    setPizzasList(pizzasList.map(oldVersionPizza => oldVersionPizza.name === newPizza.name ? newPizza : oldVersionPizza))
  }

  return (

      <div className="app">
        <Navigation/>
        <div className="work-space">
        <Routes>
          <Route path="/" element={  <PizzasDisplay pizzaList={pizzasList}/>}/>
          <Route path="/edit-pizza" element={ <EditPizza savePizza={savePizza}/>}/>
        </Routes>
        </div>
      </div>

  )
}

export default App
