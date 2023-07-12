import classes from "./HandBook.module.scss"
import { Table } from "antd"
import { useAppSelector } from "../../hooks.ts"
import { DataType, columns } from "./table-models.tsx"

export default function HandBook() {
  const pizzasList = useAppSelector((state) => state.pizzasListStore).pizzasList
  const tableData: DataType[] = pizzasList.map((pizza) => ({ pizza, key: pizza.id! }))
  return (
    <div className={classes.wrapper}>
      <Table
        bordered
        columns={columns}
        dataSource={tableData}
      />
    </div>
  )
}
