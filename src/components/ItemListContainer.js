const ItemListContainer = (greeting) => {
    return (
        <div className="ItemListContainer" style={{background: greeting.background}}>
            <p style={{color: greeting.color, fontSize: greeting.fontsize}}>{greeting.content}</p>
        </div>
    )
}
export default ItemListContainer