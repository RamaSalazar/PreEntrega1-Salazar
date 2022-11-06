import React, {useState} from "react";

const ContCart = ({stock, onAdd}) =>{
    
    const [contador, setContador] = useState(1)

    const sumar = ()=>{
        setContador(contador + 1)
        console.log(onAdd);
        if(contador >= stock){
            setContador(contador + 0)
            console.log("No tenemos mas productos en Stock");
        } 
    }

    const restar = ()=>{
        setContador(contador - 1)
        if(contador == 0){
            setContador(contador - 0)
        }

    }

    return(
        <section style={style.card}>
            <h1 >Cuantos productos desea añadir</h1>
            <div style={style.div}>
            <button style={style.btn} onClick={restar}>-</button>
            <span style={style.cont}>{contador}</span>
            <button style={style.btn} onClick={sumar}>+</button>
            </div>
            <button>Agregar al carrito</button>
        </section>
    )
}

const style ={
    card:{
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    cont:{ 
        fontSize: "1.5em" ,
        color:"red"
    },
    div:{
        display:"flex"

    },
    btn:{
        width: "2rem",
        height: "2rem"
    }

}

export default ContCart
