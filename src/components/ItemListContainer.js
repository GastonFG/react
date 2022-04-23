import ItemsCount from "./ItemsCount"

const ItemListContainer = () => {

    const onAdd = () => {

    }

    return (
        <div className="ItemListContainer">
            <ItemsCount initial={1} stock={10} onAdd={onAdd} />
        </div>
    )
}
export default ItemListContainer