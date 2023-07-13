import classes from "./HandBook.module.scss"
import type { ColumnsType } from "antd/es/table"
import ItemControls from "./ItemControls.tsx"
import ItemTitle from "./ItemTitle.tsx"
import { Item } from "../interfaces.ts"
import { PaginationProps } from "antd"

export interface DataType {
  item: Item
  key: number
}

export const columns: ColumnsType<DataType> = [
  {
    title: "Pizza",
    key: "key",
    dataIndex: "pizza",
    render: (_: any, record: DataType) => <ItemTitle item={record.item} />,
  },

  {
    title: "Actions",
    key: "key",
    width: "150px",
    align: "center",
    render: (_: any, record: DataType) =>
      record.item.id ? <ItemControls item={record.item} /> : <div className={classes.emptyRow} />,
  },
]

export const ROWS_PER_PAGE = 6
const emptyRow: Item = {
  id: 0,
  name: "",
  price: "",
  description: "",
  weight: "",
  imgBase64: "",
}
export const getTableData = (itemList: Item[]): DataType[] => {
  const tableData: DataType[] = itemList.map((item) => ({ item, key: item.id! }))
  const emptyRowsAmount = ROWS_PER_PAGE - (tableData.length % ROWS_PER_PAGE)
  if (emptyRowsAmount) {
    for (let counter = 0; counter < emptyRowsAmount; counter++) {
      tableData.push({
        item: emptyRow,
        key: new Date().getTime() + counter,
      })
    }
  }
  return tableData
}

export const paginationItemRender: PaginationProps["itemRender"] = (_, type, originalElement) => {
  if (type === "prev") {
    return <span className={classes.pagination}>Prev</span>
  }
  if (type === "next") {
    return <span className={classes.pagination}>Next</span>
  }
  return originalElement
}
