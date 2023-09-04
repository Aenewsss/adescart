'use client'

import Image from "next/image";
import Link from "next/link";
import CallWhatsApp from "./Buttons/CallWhatsapp";
import { useRouter } from "next/navigation";

const Products = () => {
    return (
        <section className="products-bg pt-5">

            <h2 className="section-heading display-4 text-center w-100 mt-0 pt-0">Conheça nossos produtos</h2>

            <div className="container d-flex justify-content-center">

                <div className="row mt-5 pt-2 d-flex justify-content-center">
                    <div className="col-xl-4 mt-xl-0 mt-4 mt- overflow-hidden position-relative d-flex justify-content-center">
                        <Link href={{ pathname: '/catalogo', query: { category: 'glove' } }}>
                            <Image loading="lazy" style={{ maxHeight: 600 }} className="img-fluid scale-image" quality={100} fill src="/images/luvas.png" alt="Seção de luvas" />
                            <h2 className="fw-bold display-4 text-uppercase text-white position-absolute text-product text-center">
                                LUVAS
                            </h2>
                        </Link>
                    </div>
                    <div className="col-xl-4 mt-xl-0 mt-4 mt- overflow-hidden position-relative d-flex justify-content-center">
                        <Link href={{ pathname: '/catalogo', query: { category: 'medicalCap' } }}>
                            <Image loading="lazy" style={{ maxHeight: 600 }} className="h-300-mobile img-fluid object-fit-cover scale-image" quality={100} fill src="/images/toucas.png" alt="Seção de toucas" />
                            <h2 className="fw-bold display-4 text-uppercase text-white position-absolute text-product text-center">
                                TOUCAS
                            </h2>
                        </Link>
                    </div>
                    <div className="col-xl-4 mt-xl-0 mt-4 mt- overflow-hidden position-relative d-flex justify-content-center">
                        <Link href={{ pathname: '/catalogo', query: { category: 'mask' } }}>
                            <Image loading="lazy" style={{ maxHeight: 600 }} className="img-fluid scale-image" quality={100} fill src="/images/mascaras.png" alt="Seção de máscaras" />
                            <h2 className="fw-bold display-4 text-uppercase text-white position-absolute text-product text-center">
                                MÁSCARAS
                            </h2>
                        </Link>
                    </div>

                    <div className="col-xl-12 d-flex flex-column align-items-center mt-5 gap-4">
                        <Link href="/catalogo" className="btn btn-main text-white scale fs-4">CATÁLOGO COMPLETO</Link>
                        <CallWhatsApp />
                    </div>
                </div>

            </div>

            <Image loading="lazy" className="w-60 mb-n10" fill src="/images/efeito-onda.svg" alt="Divisão Onda" />
        </section >
    );
}

export default Products;