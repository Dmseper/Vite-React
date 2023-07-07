import {FC} from 'react'
import './components/common/scss/App.scss'

import {PizzasDisplay} from "./components/pizzas-display/PizzasDisplay";
import {EditPizza} from "./components/edit-pizza-form/EditPizza";
import Navigation from "./components/common/navigation/Navigation";

import {Routes, Route} from "react-router-dom";

const App: FC = () => {

  return (

      <div className="app">
        <Navigation/>
        <div className="work-space">
        <Routes>
          <Route path="/" element={<PizzasDisplay />}/>
          <Route path="/edit-pizza" element={ <EditPizza/>}/>
        </Routes>
        </div>
      </div>

  )
}

export default App
