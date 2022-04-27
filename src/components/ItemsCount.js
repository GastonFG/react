import { useState } from "react"

const ItemsCount = ({ initial, stock, onAdd }) => {

    const [counter, setCounter] = useState(initial)

    const remove = () => {
        if (counter > "1") {
            setCounter(counter - 1)
        }
    }

    const add = () => {
        if (counter < stock) {
            setCounter(counter + 1)
        }
    }

    const addToCart = () => {
        onAdd(counter)
    }

    return (
        <>
            <div>
                <button onClick={remove} className="material-icons">remove</button>
                <span className="counter">{counter}</span>
                <button onClick={add} className="material-icons">add</button>
            </div>
            <div>
                <button onClick={addToCart}>Agregar al Carrito</button>
            </div>
        </>
    )
}
export default ItemsCount