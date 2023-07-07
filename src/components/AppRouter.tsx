
import { PizzasDisplay } from "../components/pizzas-display/PizzasDisplay"
import { EditPizza } from "../components/edit-pizza-form/EditPizza"
import { Routes, Route } from "react-router-dom"



const AppRouter = ()=> {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={<PizzasDisplay />}
        />
        <Route
          path="/edit-pizza"
          element={<EditPizza  />}
        />
        <Route
          path="*"
          element={<PizzasDisplay />}
        />
      </Routes>
    </div>
  )
}
export default AppRouter