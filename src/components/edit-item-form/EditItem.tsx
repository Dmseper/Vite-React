import { ChangeEvent, FC, useState } from "react"
import { Item } from "../interfaces.ts"
// import styles from "./EditItem.module.scss"
import { Button, Form, Input } from "antd"
import encodeToBase64 from "../utils/ImgToBase64.ts"
import styles from "./EditItem.module.scss"
import BackButton from "../common/ui-components/back-button/BackButton.tsx"
import { getItem } from "./edit-helpers.tsx"
import { emptyItem } from "../models.ts"
import { useAppDispatch } from "../../hooks.ts"
import {
  addItemToItemsList,
  deleteItemFromItemList,
} from "../../store/ItemList.slice.ts"
import { useNavigate } from "react-router-dom"

export const EditItem: FC = () => {
  const dispatch = useAppDispatch()

  const item = getItem()

  const [newItem, setNewItem] = useState<Item>(
    item.name ? { ...item, image: "item-img" } : emptyItem
  )
  const [img, setImg] = useState(item.imgBase64 ?? "")

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setNewItem({
      ...newItem,
      [name]: value,
    })
  }

  const handleClickUpload = () =>
    (document.querySelector(".upload-file") as HTMLElement).click()

  const handleUploadFile = async (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files?.[0]) {
      setNewItem({ ...newItem, image: "" })
      return
    }

    const fileName = event.target.files?.[0].name ?? ""
    setNewItem({ ...newItem, image: fileName })

    const imgInBase64 = await encodeToBase64(
      (event.target as HTMLInputElement).files![0]
    )
    setImg(imgInBase64)
  }

  const [form] = Form.useForm()

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  }
  const tailLayout = {
    wrapperCol: {},
  }

  const navigate = useNavigate()
  const onFinish = (values: any) => {
    dispatch(deleteItemFromItemList(newItem.name))
    const savingItem: Item = {
      ...values,
      imgBase64: img,
      id: new Date().getTime(),
    }

    console.log(savingItem)
    dispatch(addItemToItemsList(savingItem))
    navigate("/handbook")
  }

  const onReset = () => {
    form.resetFields()
    setImg("")
  }

  const typeEditButton = item.name ? "Update" : "Add"

  return (
    <div className={styles.wrapper}>
      <BackButton position="right" linkTo="/handbook" />
      <div className={styles.editCard}>
        <Form
          {...layout}
          form={form}
          initialValues={newItem}
          onFinish={onFinish}
          labelCol={{ flex: "200px" }}
          labelAlign="left"
          wrapperCol={{ flex: 1 }}
        >
          <Form.Item name="name" label="Name" rules={[{ required: true }]}>
            <Input onChange={handleChange} value={newItem.name} />
          </Form.Item>
          <Form.Item name="price" label="Price" rules={[{ required: true }]}>
            <Input onChange={handleChange} value={newItem.price} />
          </Form.Item>
          <Form.Item name="image" label="Image" rules={[{ required: true }]}>
            <div>
              <Input
                onClick={handleClickUpload}
                value={newItem.image}
                placeholder="image"
              />

              <Input
                type="file"
                onChange={handleUploadFile}
                accept="image/*"
                className="upload-file"
                style={{ display: "none" }}
              />
            </div>
          </Form.Item>
          <Form.Item name="weight" label="Weight" rules={[{ required: true }]}>
            <Input onChange={handleChange} value={newItem.weight} />
          </Form.Item>
          <Form.Item name="description" label="Description">
            <Input onChange={handleChange} value={newItem.description} />
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button
              type="primary"
              htmlType="submit"
              style={{ marginRight: "10px" }}
            >
              {typeEditButton}
            </Button>
            <Button htmlType="button" onClick={onReset}>
              Reset
            </Button>
          </Form.Item>
        </Form>

        {img ? (
          <img
            src={img}
            alt={newItem?.image}
            style={{ width: "300px", borderRadius: "100%" }}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  )
}
