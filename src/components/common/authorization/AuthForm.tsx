import classes from "./AuthForm.module.scss"
import { Modal, Form, Input, InputRef } from "antd"
import { LockOutlined, UserOutlined } from "@ant-design/icons"
import { useRef } from "react"
import { authRules } from "./auth-rules"
import { useForm } from "react-hook-form"

interface AuthValues {
  login: string
  password: string
}

interface AuthFormProps {
  open: boolean
  onCancel(): void
}

export default function CollectionCreateForm({ open, onCancel }: AuthFormProps) {
  const [form] = Form.useForm()
  const focusedInputRef = useRef<InputRef>(null)

  const onSubmit = (values: AuthValues) => {
    console.log(values)
  }

  const okClicked = () => {
    form
      .validateFields()
      .then((values) => {
        form.resetFields()
        onSubmit(values)
      })
      .catch((info) => {
        console.log("Validate Failed:", info)
      })
  }

  const dialogOpened = () => {
    focusedInputRef?.current?.focus()
  }

  return (
    <Modal
      open={open}
      title="Authorization"
      okText="Log in"
      cancelText="Cancel"
      closable={false}
      afterOpenChange={dialogOpened}
      onCancel={onCancel}
      onOk={okClicked}
    >
      <Form
        form={form}
        layout="vertical"
        name="auth-form"
        initialValues={{ login: "", password: "" }}
      >
        <Form.Item
          name="login"
          rules={authRules.userName}
        >
          <Input
            ref={focusedInputRef}
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
            maxLength={30}
          />
        </Form.Item>

        <Form.Item
          name="password"
          rules={authRules.password}
        >
          <Input.Password
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
            maxLength={30}
          />
        </Form.Item>
      </Form>
    </Modal>
  )
}
