import React from "react";


const Mensaje = (props) =>{


    return(
        <main>
            <h1 style={style.title}>Bienvenidos</h1>
            <h2 style={style.text}>{props.gretting}</h2>
        </main>

    )
}

export default Mensaje

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
