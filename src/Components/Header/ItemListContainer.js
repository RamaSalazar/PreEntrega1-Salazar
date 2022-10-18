import React, {useEffect, useState} from "react";
import ItemList from "../ItemList"
import { useParams } from "react-router-dom";

export const ItemListContainer= (props) =>{

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true);
    const {id} = useParams()
    const URL_BASE = "https://fakestoreapi.com/products"
    const URL_CAT= `${URL_BASE}/category/${id}`
    // useEffect(()=>{
    //     const getProducts = async () =>{
    //         try{
    //             const res = await fetch("https://fakestoreapi.com/products/category/jeweler")
    //             const data = await res.json()
    //             setProductos(data)
    //         }catch{
    //             console.log("error");
    //         }finally{
    //             setLoading(false)
    //         }
    //     }
    //     getProducts()

    // },[])
    useEffect(() =>{
        fetch(id == undefined?URL_BASE : URL_CAT )  
        .then((res) => res.json())
        .then((json) => setProductos(json))
        .catch((error) => {
          console.log(error);
        })
        .finally(setLoading(false))
    },[id])

    return(
        <main>
            <h1 style={style.title}>Bienvenidos</h1>
            <h2 style={style.text}>{props.gretting}</h2>
            {<>{loading ? <h1>Cargando...</h1> : <ItemList products={productos} />}</>}
        </main>

    )
}



const style = {
    title:{
        color:"#2C2B4B",
        textAlign:"center",
        margin:1
    },

    text:{
        color:"#2b2b2b",
        textAlign:"center",
        fontSize:`3em`,
        margin:20
    }
}
