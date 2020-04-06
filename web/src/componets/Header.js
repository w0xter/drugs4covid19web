import React from 'react'
import Scrollspy from 'react-scrollspy'
import data from '../assets/data/chartdata'
import logo from '../assets/logo.svg'
import logoMin from '../assets/logo.min.svg'
import {MdMenu} from 'react-icons/md'
export default function Header(){
    return(
        <div id="top" className="navbar navbar-expand-lg blueBg header sticky-top">
        <div className="d-flex flex-grow-1">
            <span className="w-100 d-lg-none d-block"></span>
            <a className="navbar-brand d-none d-lg-inline-block" href="#">
                <img src={logoMin} className="img-fluid" alt=""/>
            </a>
            <a className="navbar-brand-two mx-auto d-lg-none d-inline-block" href="#">
                <img src={logoMin} class="img-fluid" alt=""/>
            </a>
            <div className="w-100 text-right">
                <button className="navbar-toggler text-white" type="button" data-toggle="collapse" data-target="#myNavbar">
                   <MdMenu></MdMenu>
                </button>
            </div>
        </div>
        <div className="collapse navbar-collapse flex-grow-1 text-right" id="myNavbar">
            <ul className="navbar-nav ml-auto flex-nowrap">
            <li className="nav-item">
                    <a className="nav-link m-2 menu-link" href="#info">Introduction</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link m-2 menu-link " href="#problem">Problems</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link m-2 menu-link " href="#solution">Resources</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link m-2 menu-link " href="#approach">Our Approach</a>
                </li>     
                <li className="nav-item">
                    <a className="nav-link m-2 menu-link " href="#team">Who Are We?</a>
                </li>
                <li className="nav-item">
                    {document.location.href.toString().slice(-2) !== 'EN'? (<a className="nav-link m-2 menu-link " href="/EN">English version</a>):(
                        <a className="nav-link m-2 menu-link " href="/">Versión en Español</a>
                    )
                    }
                </li>                                    
            </ul>
        </div>
    </div>

    )
}