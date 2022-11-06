import React, {useEffect, useState} from "react";
import ItemList from "../ItemList"
import { useParams } from "react-router-dom";
import {getDocs, collection, query, where,} from "firebase/firestore"
import {db} from "../../fireBase/fireBase"

export const ItemListContainer= (props) =>{

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true);
    const {id} = useParams()
    const prodCollection = collection(db,"productos")
    const cat = query(prodCollection,where("category","==", "electronics")) 

    useEffect(() =>{
        getDocs(id==undefined?prodCollection:cat )
        .then((result)=>{
            const listProd = result.docs.map(item=>{
                return {
                    ...item.data(),
                    id: item.id}
            })
            console.log(listProd);
            setProductos(listProd);
        })
        .catch((error) => {
            console.log(error);
        })
        .finally(setLoading(false))

        // fetch(id == undefined?URL_BASE : URL_CAT )  
        // .then((res) => res.json())
        // .then((json) => setProductos(json))
        // .catch((error) => {
        //   console.log(error);
        // })
        // .finally(setLoading(false))
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
