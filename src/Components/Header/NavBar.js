import React from "react";
import logo from "../../img/logo.svg"
import "./NavBar.css"
import LocalMallIcon from '@mui/icons-material/LocalMall';

const NavBar = () =>{
    return(
        <header>
            <img src={logo} alt="" />
            <h1>Kuntur</h1>
            <section className="nav">
                <LocalMallIcon fontSize="large" className="icon"/>
                <nav>
                    <ul>
                        <li>
                            <a href="">Catalogo</a>
                            <a href="">Galeria</a>
                            <a href="">Quienes Somos</a>
                            <a href="">Contactanos</a>
                        </li>
                    </ul>
                </nav>
            </section>

        </header>
    )
}

export default NavBar