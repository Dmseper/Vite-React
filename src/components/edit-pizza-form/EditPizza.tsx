import {ChangeEvent, FC, FormEvent, useState} from "react"
import {EditPizzaForm, Pizza} from "../interfaces";
import styles from "./EditPizza.module.scss"

const initState = {
  title: "",
  price: "",
  image: "",
  description: "",
  weight: "",
}

export const EditPizza: FC<EditPizzaForm> = ({pizza, savePizza}) => {
  const [newPizza, setNewPizza] = useState<Pizza>(pizza ?? initState)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target
    setNewPizza({
      ...newPizza,
      [name]: value,
    })
  }
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const {title, price, image} = newPizza

    if (!title || !price || !image) {
      throw new Error('Invalid field value');
    }

    if (savePizza) {
      savePizza({...newPizza, price: Number(newPizza.price), weight: Number(newPizza.weight)})
    }
    setNewPizza(initState)
  }

  return (
    <form onSubmit={handleSubmit} className={styles.edit}>
      <input type="text"
             name="title"
             placeholder="Name"
             onChange={handleChange}
             value={newPizza.title}
      />
      <input type="text"
             name="price"
             placeholder="Price"
             onChange={handleChange}
             value={newPizza.price}
      />
      <input type="text"
             name="image"
             placeholder="Img"
             onChange={handleChange}
             value={newPizza.image}
      />
      <input type="text"
             name="description"
             placeholder="Description"
             onChange={handleChange}
             value={newPizza.description}
      />
      <input type="text"
             name="weight"
             placeholder="Weight"
             onChange={handleChange}
             value={newPizza.weight}
      />
      <button type="submit"
      >Add to Menu
      </button>
    </form>
  )
}
