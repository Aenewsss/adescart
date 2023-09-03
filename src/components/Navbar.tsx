'use client'

import Link from "next/link";
import SearchField from "./SearchField";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {

    const [backgroundColor, setBackgroundColor] = useState('transparent');

    const path = usePathname()

    if (typeof window !== 'undefined') {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 0 || path == '/produto') {
                setBackgroundColor('black')
            } else {
                setBackgroundColor('transparent')
            }
        })
    }

    useEffect(() => {
        if (path == '/produto') setBackgroundColor('black')
        else setBackgroundColor('transparent')
    }, [path]);



    return (
        <nav id="sidebar" style={{ backgroundColor }} className="pt-2 z-2 navbar navbar-expand-lg position-fixed w-100 m-0 p-0">
            <div className="container-fluid d-flex justify-content-around pb-3 pt-1 gap-3">
                <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <Image width={40} height={40} src="/icons/menu.svg" alt="Ícone Menu" />
                </button>

                <Link className="navbar-brand navbar-brand w-50 d-flex justify-content-center text-white m-0" href="/#">
                    <Image fill id="img-navbar" className="img-fluid" style={{ maxHeight: '90px', maxWidth: '200px' }} src="/images/logo-transparente.svg" alt="logo.svg" />
                </Link>

                <div className="collapse navbar-collapse mt-md-0 mt-3 pt-2" id="navbarNav">
                    <ul className="flex-wrap navbar-nav d-flex flex-row align-items-center justify-content-center gap-3">
                        <li className="nav-item" >
                            <Link role="button" className="nav-link text-green scale fw-bold" href={"/catalogo"}>
                                Catálogo
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link role="button" className="nav-link text-white" target="_blank" href="https://api.whatsapp.com/send?phone=5561991761509&text=Olá, estou entrando em contato pelo site e gostaria de saber mais sobre A Descart!">Whatsapp</Link>
                        </li>
                        <li className="nav-item">
                            <Link role="button" className="nav-link text-white" target="_blank" href="https://www.instagram.com/adescartdf/">Instagram</Link>
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