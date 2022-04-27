const Item = ({ producto }) => {
    return (
        <article>
            <img src={producto.imagen} alt={producto.nombre} width={500} />
            <h3>{producto.nombre}</h3>
            <p>Precio: $ {producto.precio} </p>
            <p>Categoría: {producto.categoria}</p>
            <button>Ver +</button>
        </article>
    )
}
export default Item