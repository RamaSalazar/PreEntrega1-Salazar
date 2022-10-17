import React, {useEffect, useState} from "react";
import ItemList from "../ItemList"

export const ItemListContainer= (props) =>{

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true);
    

    useEffect(() =>{
        fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((json) => setProductos(json))
        .catch((error) => {
          console.log(error);
        })
        .finally(setLoading(false))
    },[])

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
