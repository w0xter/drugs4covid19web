import React from 'react'
import Scrollspy from 'react-scrollspy'
export default function Header(){
    return(
        <div id="top" className="navbar navbar-expand-lg blueBg header sticky-top">
        <div className="d-flex flex-grow-1">
            <span className="w-100 d-lg-none d-block"></span>
            <a className="navbar-brand d-none d-lg-inline-block" href="#">
                <h1 className="title text-white">DRUGS4COVID</h1>
            </a>
            <a className="navbar-brand-two mx-auto d-lg-none d-inline-block" href="#">
                <h4 className="red"><b>HELPDAO</b></h4>
            </a>
            <div className="w-100 text-right">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#myNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>
        </div>
        <div className="collapse navbar-collapse flex-grow-1 text-right" id="myNavbar">
            <ul className="navbar-nav ml-auto flex-nowrap">
            <li className="nav-item">
                    <a className="nav-link m-2 menu-link" href="#info">Introducción</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link m-2 menu-link " href="#problem">Problemas</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link m-2 menu-link " href="#solution">Recursos</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link m-2 menu-link " href="#approach">Nuestro Enfoque</a>
                </li>     
            </ul>
        </div>
    </div>

    )
}