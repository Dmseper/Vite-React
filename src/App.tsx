import {useState, FC} from 'react'
import './App.scss'
import {EditPizza} from "./components/edit-pizza-form/EditPizza";

import {Pizza} from "./components/interfaces";
import {PizzasDisplay} from "./components/pizzas-display/PizzasDisplay";

const App: FC = () => {
  const [pizzasList] = useState<Map<string, Pizza>>(new Map())

  const addPizza = (newPizza: Pizza ) => {
    pizzasList.set(newPizza.title, newPizza)
    console.log([...pizzasList.values()])
  }
  return (
    <>
      <div className="app">
        <div className="wrap">
          <div className="header">
            Pizza House
          </div>
          <EditPizza addPizza ={addPizza}/>
          <PizzasDisplay pizzaList={[...pizzasList.values()]}/>
        </div>
      </div>
    </>
  )
}

export default App
