import classes from "./HandBook.module.scss"
import { Space } from "antd"
import { useNavigate } from "react-router-dom"
import { useAppDispatch } from "../../hooks.ts"
import { setEditPizza } from "../../store/EditPizza.slice.ts"
import { deletePizzaFromPizzaList } from "../../store/PizzasList.slice.ts"
import { Item } from "../interfaces.ts"
import { DeleteOutlined, EditOutlined } from "@ant-design/icons"

interface PropType {
  item: Item
}

export default function ItemControls({ item }: PropType) {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const handleEdit = (item: Item) => {
    dispatch(setEditPizza(item))
    navigate("/edit-pizza")
  }

  const handleDelete = (pizzaName: string) => {
    dispatch(deletePizzaFromPizzaList(pizzaName))
  }
  return (
    <Space size="middle">
      <EditOutlined
        className={classes.icon}
        onClick={() => handleEdit(item)}
      />
      <DeleteOutlined
        className={classes.icon}
        onClick={() => handleDelete(item.name)}
      />
    </Space>
  )
}
