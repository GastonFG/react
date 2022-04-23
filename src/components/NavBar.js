import CartWidget from "./CartWidget"

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Quiénes Somos</a></li>
                <li><a href="#">Productos</a></li>
                <li><a href="#">Contacto</a></li>
                <li><CartWidget /></li>
            </ul>
            
        </nav>
    )
}
export default NavBar

