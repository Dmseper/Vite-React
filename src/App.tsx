import {FC} from "react"
import "./components/common/scss/App.scss"
import Navigation from "./components/common/navigation/Navigation"
import AppRouter from "./components/AppRouter.tsx"

import {useAppDispatch} from "./hooks.ts";
import {setPizzasList} from "./store/PizzasList.slice.ts";
import {dataPizzas} from "./DataPizzas.ts";
import {setIngredients} from "./store/Ingredients.slice.ts";
import {dataIngredients} from "./DataIngredients.ts";

const App: FC = () => {
    const dispatch = useAppDispatch()
    dispatch(setPizzasList([...dataPizzas]))
    dispatch(setIngredients([...dataIngredients]))

    return (
        <div className="app">
            <Navigation/>
            <div className="work-space">
                <AppRouter/>
            </div>
        </div>
    )
}

export default App
