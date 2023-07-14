import classes from "./HandBook.module.scss"
import { Button, Table } from "antd"
import { useAppDispatch, useAppSelector } from "../../hooks.ts"
import { columns } from "./table-models.tsx"
import {
  ROWS_PER_PAGE,
  getTableData,
  paginationItemRender,
} from "./table-models.tsx"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { emptyItem } from "../models.ts"
import { setEditItem } from "../../store/EditItem.slice.ts"

export default function HandBook() {
  const itemsList = useAppSelector((state) => state.itemsListStore).itemList
  const [tableData, setTableData] = useState(getTableData(itemsList))

  useEffect(() => {
    setTableData(getTableData(itemsList))
  }, [itemsList.length])

  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const addClicked = () => {
    dispatch(setEditItem(emptyItem))
    navigate("/edit-item")
  }
  return (
    <div className={classes.wrapper}>
      <div className={classes.table}>
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
      </div>
      <Button className="custom-button" onClick={() => addClicked()}>
        Add item
      </Button>
    </div>
  )
}
