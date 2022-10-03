import React from "react";
import logo from "../../img/logo.svg"
import Cart from "./CartWidget"
import { height } from "@mui/system";

const NavBar = () =>{

    const linkHeader = [
        {name:"Catalogo", id:0, link:""},
        {name:"Galeria", id:1, link:""},
        {name:"Quienes Somos", id:2, link:""},
        {name:"Contactanos", id:3, link:""}
    ]

    return(
        <header style={style.header}>
            <img  src={logo} alt="" />
            <h1 style={style.h1}>Kuntur</h1>
            <section style={style.nav}>
                <Cart />
                <nav >
                    <ul style={style.ul}>
                        <li>
                            {linkHeader.map((cat)=>{
                                return <a style={style.a} key={cat.id} href={cat.link}>{cat.name}</a>
                            })}
                        </li>
                    </ul>
                </nav>
            </section>

        </header>
    )
}

const viewPort = {
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight
}

const style = {
    header:{
        display: viewPort.width > 900 ? "flex" : "none",
        justifyContent: "space-evenly",
        alignItems: "center",
        margin: "1rem 0 1rem 0,"
    },
    
    a:{
        textDecoration: "none",
        padding: "0 1rem 0 1rem",
        fontSize: "1.5em",
    },
    
    ul:{
        display: "flex",
        listStyle: "none",
    },
    
    h1:{
        fontSize: "5em",
        color: "red",
    },
    
    nav:{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
    },
}


export default NavBar

