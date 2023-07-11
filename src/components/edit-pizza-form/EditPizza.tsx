import {ChangeEvent, FC, useState} from "react"
import {Pizza} from "../interfaces";
// import styles from "./EditPizza.module.scss"
import {Button, Form, Input} from 'antd';
import encodeToBase64 from "../utils/ImgToBase64.ts";
import {useAppSelector} from "../../hooks.ts";
import styles from "./EditPizza.module.scss"

const initState = {
    name: "",
    price: "",
    image: "",
    imgBase64: "",
    description: "",
    weight: "",
}

export const EditPizza: FC = () => {

    const pizza = useAppSelector(state => state.pizzaEditStore).pizza
    const [newPizza, setNewPizza] = useState<Pizza>(pizza.name ? {...pizza, image: "pizza-img"} : initState)
    const [img, setImg] = useState(pizza.imgBase64 ?? "")

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target
        setNewPizza({
            ...newPizza,
            [name]: value,
        })
    }

    const handleClickUpload = () => (document.querySelector(".upload-file") as HTMLElement).click()

    const handleUploadFile = async (event: ChangeEvent<HTMLInputElement>) => {

        if (!event.target.files?.[0]) {
            setNewPizza({...newPizza, image: '',})
            return
        }

        const fileName = event.target.files?.[0].name ?? ""
        setNewPizza({...newPizza, image: fileName,})

        const imgInBase64 = await encodeToBase64((event.target as HTMLInputElement).files![0]);
        setImg(imgInBase64)
    }

    const [form] = Form.useForm()

    const layout = {
        labelCol: {span: 8},
        wrapperCol: {span: 16},
    }
    const tailLayout = {
        wrapperCol: {},
    }

    const onFinish = (values: any) => {
        console.log(values)
    }

    const onReset = () => {
        form.resetFields();
        setImg("")
    };

    const typeEditButton = () => pizza.name ? "Update" : "Add"


    return (
        <>
          <div className={styles.editCard}>
            <Form {...layout}
                  form={form}
                  initialValues={newPizza}
                  onFinish={onFinish}
                  labelCol={{flex: "200px"}}
                  labelAlign="left"
                  wrapperCol={{flex: 1}}
            >
                <Form.Item name="name" label="Name" rules={[{required: true}]}>
                    <Input onChange={handleChange}
                           value={newPizza.name}/>
                </Form.Item>
                <Form.Item name="price" label="Price" rules={[{required: true}]}>
                    <Input onChange={handleChange}
                           value={newPizza.price}/>
                </Form.Item>
                <Form.Item name="image" label="Image" rules={[{required: true}]}>
                    <div>
                        <Input onClick={handleClickUpload}
                               value={newPizza.image}
                               placeholder="image"/>

                        <Input type="file"
                               onChange={handleUploadFile}
                               accept="image/*"
                               className="upload-file"
                               style={{display: "none"}}
                        />
                    </div>
                </Form.Item>
                <Form.Item name="weight" label="Weight" rules={[{required: true}]}>
                    <Input onChange={handleChange}
                           value={newPizza.weight}/>
                </Form.Item>
                <Form.Item name="discription" label="Description">
                    <Input onChange={handleChange}
                           value={newPizza.description}/>
                </Form.Item>

                <Form.Item {...tailLayout} >
                    <Button type="primary"
                            htmlType="submit"
                            style={{marginRight: '10px'}}>
                        {typeEditButton()}
                    </Button>
                    <Button htmlType="button"
                            onClick={onReset}>
                        Reset
                    </Button>
                </Form.Item>

            </Form>

            {img ? <img src={img}
                        alt={newPizza?.image}
                        style={{width: '300px', borderRadius: '100%'}}/> : ''}

          </div>
        </>
    )
}
