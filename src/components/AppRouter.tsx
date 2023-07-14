import { ItemsDisplay } from "./items-display/ItemssDisplay"
import { EditItem } from "./edit-item-form/EditItem"
import { Routes, Route } from "react-router-dom"
import HandBook from "./handbook/HandBook"

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<ItemsDisplay />} />
        <Route path="/edit-item" element={<EditItem />} />
        <Route path="/handbook" element={<HandBook />} />
        <Route path="*" element={<ItemsDisplay />} />
      </Routes>
    </>
  )
}
export default AppRouter
