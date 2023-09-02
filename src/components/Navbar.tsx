'use client'

import Link from "next/link";
import SearchField from "./SearchField";
import Image from "next/image";
import { useState } from "react";

const Navbar = () => {

    const [backgroundColor, setBackgroundColor] = useState('transparent');

    if (typeof window !== 'undefined') {
        window.addEventListener('scroll', () => {
            if (window.innerWidth > 767) {
                if (window.scrollY > 0) {
                    setBackgroundColor('black')
                } else {
                    setBackgroundColor('transparent')
                }
            }
        })
    }

    return (
        <nav id="sidebar" style={{ backgroundColor }} className="z-2 navbar navbar-expand-lg position-fixed w-100 m-0 p-0">
            <div className="container-fluid d-flex justify-content-around pb-3 pt-1 gap-3">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <Image width={40} height={40} src="/icons/menu.svg" alt="Ícone Menu" />
                </button>

                <a className="navbar-brand navbar-brand w-50 d-flex justify-content-center text-white m-0" href="/">
                    <img id="img-navbar" className="img-fluid" style={{ maxHeight: '90px' }} src="/images/logo-transparente.svg" alt="logo.svg" />
                </a>

                <div className="collapse navbar-collapse mt-md-0 mt-3 pt-2" id="navbarNav">
                    <ul className="navbar-nav d-flex flex-row align-items-center justify-content-center gap-3">
                        <li className="nav-item" >
                            <Link className="nav-link text-green scale fw-bold" href={"/catalogo"}>
                                Catálogo
                            </Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" target="_blank" href="https://api.whatsapp.com/send?phone=5561996851375&text=Olá, gostaria de saber mais sobre o Vinum!">Whatsapp</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" target="_blank" href="https://instagram.com/vinum_wineeventos?igshid=YmMyMTA2M2Y=">Instagram</a>
                        </li>
                        <li className="nav-item">
                            <SearchField />
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;