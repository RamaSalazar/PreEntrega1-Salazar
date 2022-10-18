import React from "react";
import logo from "../../img/logo.svg"
import Cart from "./CartWidget"
import { Link,} from "react-router-dom";

const NavBar = () =>{

    const linkHeader = [
        {name:"electronics", id:0, link:"/categoria/electronics"},
        {name:"jewelery", id:1, link:"/categoria/jewelery"},
        {name:"men's clothing", id:2, link:"/categoria/men's clothing"},
        {name:"women's clothing", id:3, link:"/categoria/women's clothing"}
    ]

    return(
        <header style={style.header}>
            <Link to="/">
                <img  src={logo} alt="" />
            </Link>
            <h1 style={style.h1}>Kuntur</h1>
            <section style={style.nav}>
                    <Cart />
                <nav >
                    <ul style={style.ul}>
                        <li>
                            {linkHeader.map((cat)=>{
                                return <Link style={style.a} key={cat.id} to={cat.link}>{cat.name}</Link>
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

