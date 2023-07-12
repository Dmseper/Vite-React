import { PizzasDisplay } from "../components/pizzas-display/PizzasDisplay"
import { EditPizza } from "../components/edit-pizza-form/EditPizza"
import { Routes, Route } from "react-router-dom"
import HandBook from "./handbook/HandBook"

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<PizzasDisplay />}
        />
        <Route
          path="/edit-pizza"
          element={<EditPizza />}
        />
        <Route
          path="/handbook"
          element={<HandBook />}
        />
        <Route
          path="*"
          element={<PizzasDisplay />}
        />
      </Routes>
    </>
  )
}
export default AppRouter
