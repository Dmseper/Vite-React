import {ChangeEvent, FC, FormEvent, useState} from "react"
import {AddPizzaForm, Pizza} from "../interfaces";

const initState = {
  title: "",
  price: 0,
  picture: ""
}

export const EditPizza: FC<AddPizzaForm> = ({addPizza}) => {
  const [newPizza, setNewPizza] = useState<Pizza>(initState)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target
    setNewPizza({
      ...newPizza,
      [name]: value,
    })
  }
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const { title, price, picture} = newPizza

    if(!title || !price || !picture) {
      throw new Error('Invalid field value');
    }

    addPizza({...newPizza, price: Number(newPizza.price)})
    setNewPizza(initState)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text"
             name="title"
             placeholder="Name"
             onChange={handleChange}
             value={newPizza.title}
      />
      <input type="text"
             name="price"
             placeholder="0"
             onChange={handleChange}
             value={newPizza.price}
      />
      <input type="text"
             name="picture"
             placeholder="picture"
             onChange={handleChange}
             value={newPizza.picture}
      />
      <button type="submit"
      >+ Добавить в меню
      </button>
    </form>
  )
}
