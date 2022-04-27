import { useEffect, useState } from "react"
import ItemList from "./ItemList"

const productosDB = [
   {
      id: 1,
      nombre: "Batman - Batplane",
      precio: 1000,
      imagen: "https://media.mattel.com/root/HWCarsCatalog/Web/MainImage/GRX88_W_21_003.png",
      categoria: "Batman"
   },
   {
      id: 2,
      nombre: "Batman - Batmobile TV Serie",
      precio: 1500,
      imagen: "https://media.mattel.com/root/HWCarsCatalog/Web/MainImage/GHB94_W_20_003.png",
      categoria: "Batman"
   },
   {
      id: 3,
      nombre: "Batman - Justice League",
      precio: 1300,
      imagen: "https://media.mattel.com/root/HWCarsCatalog/Web/MainImage/FJV39_c_18_003.png",
      categoria: "Batman"
   }
]

const ItemListContainer = () => {

   const [cargando, setcargando] = useState(true)
   const [productos, setProductos] = useState([])

   useEffect(() => {

      const mipromise = new Promise((res, rej) => {

         setTimeout(() => {
            res(productosDB)
         }, 2000)
      })
      mipromise
         .then(() => {
            console.log("Salio todo Bien")
            setProductos(productosDB)
            setcargando(false)
         })
   }, [])

   if (cargando) {
      return (
         <p>Cargando productos...</p>
      )
   } else {
      return (
         <ItemList productos={productos} />
      )
   }
}

export default ItemListContainer