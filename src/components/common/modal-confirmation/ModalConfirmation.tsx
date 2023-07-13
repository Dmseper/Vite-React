import { Modal } from "antd"
import { useCallback } from "react"

interface PropType {
  open: boolean
  title: string
  message: string
  onOk(): void
  onCancel(): void
}

export default function ModalConfirmation({ open, title, message, onCancel, onOk }: PropType) {
  const okClicked = useCallback(onOk, [open, title, message])
  const cancelClicked = useCallback(onCancel, [open, title, message])
  return (
    <Modal
      open={open}
      title={title}
      closable={false}
      onCancel={cancelClicked}
      onOk={okClicked}
    >
      <p>{message}</p>
    </Modal>
  )
}
