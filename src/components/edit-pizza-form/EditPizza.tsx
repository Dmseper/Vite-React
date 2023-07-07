import { ChangeEvent, FC, useEffect, useState } from "react"
import { EditPizzaForm, Pizza } from "../interfaces"
// import styles from "./EditPizza.module.scss"
import { Button, Form, Input } from "antd"
import encodeToBase64 from "../utils/ImgToBase64.ts"

const initState = {
  name: "",
  price: "",
  image: "",
  description: "",
  weight: "",
}

export const EditPizza: FC<EditPizzaForm> = ({ pizza, savePizza }) => {
  const [newPizza, setNewPizza] = useState<Pizza>(initState)

  const [img, setImg] = useState("")

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setNewPizza({
      ...newPizza,
      [name]: value,
    })
  }

  const handleClickUpload = () => (document.querySelector(".upload-file") as HTMLElement).click()

  const handleUploadFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const fileName = event.target.files?.[0].name ?? ""

    setNewPizza({
      ...newPizza,
      image: fileName,
    })

    if (event.target.files) {
      const imageLink = URL.createObjectURL((event.target as HTMLInputElement).files![0])
      setImg(imageLink)
    }

    const imgInBase64 = await encodeToBase64((event.target as HTMLInputElement).files![0])
  }

  const [form] = Form.useForm()

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  }
  const tailLayout = {
    wrapperCol: { flex: "100%", span: 100 },
  }

  const onFinish = (values: any) => {
    console.log(values)
  }

  const onReset = () => {
    form.resetFields()
  }

  const typeEditButton = () => (pizza ? "Update pizza" : "Add to Menu")

  return (
    <>
      <Form
        {...layout}
        form={form}
        initialValues={initState}
        onFinish={onFinish}
        labelCol={{ flex: "200px" }}
        labelAlign="left"
        wrapperCol={{ flex: 1 }}
      >
        <Form.Item
          name="name"
          label="Name"
          rules={[{ required: true }]}
        >
          <Input
            onChange={handleChange}
            value={newPizza.name}
          />
        </Form.Item>
        <Form.Item
          name="price"
          label="Price"
          rules={[{ required: true }]}
        >
          <Input
            onChange={handleChange}
            value={newPizza.price}
          />
        </Form.Item>
        <Form.Item
          name="image"
          label="Image"
          rules={[{ required: true }]}
        >
          <div>
            <Input
              onClick={handleClickUpload}
              value={newPizza.image}
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
        <Form.Item
          name="weight"
          label="Weight"
          rules={[{ required: true }]}
        >
          <Input
            onChange={handleChange}
            value={newPizza.weight}
          />
        </Form.Item>
        <Form.Item
          name="discription"
          label="Description"
        >
          <Input
            onChange={handleChange}
            value={newPizza.description}
          />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button
            type="primary"
            htmlType="submit"
            style={{ marginRight: "10px" }}
          >
            {typeEditButton()}
          </Button>
          <Button
            htmlType="button"
            onClick={onReset}
          >
            Reset
          </Button>
        </Form.Item>
      </Form>
      {img ? (
        <img
          src={img}
          alt={pizza?.image}
        />
      ) : (
        ""
      )}
      quotes{" "}
    </>
  )
}
