import classes from "./HandBook.module.scss"
import type { ColumnsType } from "antd/es/table"
import ItemControls from "./ItemControls.tsx"
import ItemTitle from "./ItemTitle.tsx"
import { Item } from "../interfaces.ts"
import { PaginationProps } from "antd"
import { emptyItem } from "../models.ts"

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
      record.item.name ? (
        <ItemControls item={record.item} />
      ) : (
        <div className={classes.emptyRow} />
      ),
  },
]

export const ROWS_PER_PAGE = 6

export const getTableData = (itemList: Item[]): DataType[] => {
  const tableData: DataType[] = itemList.map((item) => ({
    item,
    key: item.id ? item.id : new Date().getTime(),
  }))
  const emptyRowsAmount = ROWS_PER_PAGE - (tableData.length % ROWS_PER_PAGE)
  if (emptyRowsAmount > 0 && emptyRowsAmount < 6) {
    for (let counter = 1; counter <= emptyRowsAmount; counter++) {
      tableData.push({
        item: emptyItem,
        key: new Date().getTime() + counter,
      })
    }
  }
  return tableData
}

export const paginationItemRender: PaginationProps["itemRender"] = (
  _,
  type,
  originalElement
) => {
  if (type === "prev") {
    return <span className={classes.pagination}>Prev</span>
  }
  if (type === "next") {
    return <span className={classes.pagination}>Next</span>
  }
  return originalElement
}
