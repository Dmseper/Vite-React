import { PizzasDisplay } from "../components/pizzas-display/PizzasDisplay"
import { EditItem } from "./edit-item-form/EditItem"
import { Routes, Route } from "react-router-dom"
import HandBook from "./handbook/HandBook"

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<PizzasDisplay />} />
        <Route path="/edit-item" element={<EditItem />} />
        <Route path="/handbook" element={<HandBook />} />
        <Route path="*" element={<PizzasDisplay />} />
      </Routes>
    </>
  )
}
export default AppRouter
