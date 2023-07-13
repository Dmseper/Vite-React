import classes from "./HandBook.module.scss"
import { Button, Table } from "antd"
import { useAppDispatch, useAppSelector } from "../../hooks.ts"
import { columns } from "./table-models.tsx"
import { ROWS_PER_PAGE, getTableData, paginationItemRender } from "./table-models.tsx"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export default function HandBook() {
  const pizzasList = useAppSelector((state) => state.pizzasListStore).pizzasList
  const [tableData, setTableData] = useState(getTableData(pizzasList))

  useEffect(() => {
    setTableData(getTableData(pizzasList))
  }, [pizzasList.length])

  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const addClicked = () => {}
  return (
    <div className={classes.wrapper}>
      <Table
        bordered
        columns={columns}
        dataSource={tableData}
        pagination={{
          pageSize: ROWS_PER_PAGE,
          hideOnSinglePage: true,
          itemRender: paginationItemRender,
        }}
      />
      <Button
        className="custom-button"
        onClick={() => addClicked()}
      >
        Add pizza
      </Button>
    </div>
  )
}
