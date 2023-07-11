import { Space, Table, Tag } from "antd"
import type { ColumnsType } from "antd/es/table"
import { dataPizzas } from "../../DataPizzas"

interface DataType {
  name: string
}

const columns: ColumnsType<DataType> = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },

  {
    title: "",
    key: "",
    render: () => (
      <Space size="middle">
        <span>Edit</span>
        <span>Delete</span>
      </Space>
    ),
  },
]

export default function HandBook() {
  return (
    <Table
      columns={columns}
      dataSource={dataPizzas}
    />
  )
}
