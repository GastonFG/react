import Header from "./components/Header"
import ItemListContainer from "./components/ItemListContainer"
import Main from "./components/Main"
import Footer from "./components/Footer"

const App = () => {
    return (
        <>
            <Header />
            <ItemListContainer 
                content="Contenido 1"
                background="yellow"
                fontsize={40}px
                color="red"
            >
            </ItemListContainer>
            <Main />
            <Footer />
        </>
    )
}
export default App