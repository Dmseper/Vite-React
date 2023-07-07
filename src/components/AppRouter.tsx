import { Pizza } from "../components/interfaces.ts"
import { PizzasDisplay } from "../components/pizzas-display/PizzasDisplay"
import { EditPizza } from "../components/edit-pizza-form/EditPizza"
import { Routes, Route } from "react-router-dom"

interface PropType {
  pizzasList: Pizza[]
  savePizza(newPizza: Pizza): void
}

export default function AppRouter({ pizzasList, savePizza }: PropType) {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={<PizzasDisplay pizzaList={pizzasList} />}
        />
        <Route
          path="/edit-pizza"
          element={<EditPizza savePizza={savePizza} />}
        />
        <Route
          path="*"
          element={<PizzasDisplay pizzaList={pizzasList} />}
        />
      </Routes>
    </div>
  )
}
