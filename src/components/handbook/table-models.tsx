import type { ColumnsType } from "antd/es/table"
import ItemControls from "./ItemControls.tsx"
import ItemTitle from "./ItemTitle.tsx"
import { Pizza } from "../interfaces.ts"

export interface DataType {
  pizza: Pizza
  key: number
}

export const columns: ColumnsType<DataType> = [
  {
    title: "Pizza",
    key: "key",
    dataIndex: "pizza",
    render: (pizza: Pizza) => <ItemTitle item={pizza} />,
  },

  {
    title: "Actions",
    key: "key",
    width: "150px",
    align: "center",
    render: (_: any, record: DataType) => <ItemControls item={record.pizza} />,
  },
]
