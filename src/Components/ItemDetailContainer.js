import React, { useEffect, useState } from "react";
import ItemDetail from "../Components/ItemDetail"
import { useParams } from "react-router-dom";

export const ItemDetailContainer = ({ greeting }) => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const {id} = useParams()
  const URL_BASE = "https://fakestoreapi.com/products"
  const URL_PROD = `${URL_BASE}/${id}` 

  useEffect(() =>{
    fetch(id == undefined ? URL_BASE : URL_PROD )  
    .then((res) => res.json())
    .then((json) => setProduct(json))
    .catch((error) => {
      console.log(error);
    })
    .finally(setLoading(false))
},[id])
  return (
    <>
      <h1>{greeting}</h1>
      {<>{loading ? <h1>Cargando...</h1> : <ItemDetail product={product} />}</>}
    </>
  );
};