import Image from "next/image";
import Link from "next/link";

const Products = () => {
    return (
        <section className="products-bg pt-5 pb-5">

            <h2 className="section-heading display-3 text-center w-100">Conheça nossos <br /> produtos</h2>

            <div className="container d-flex justify-content-center">

                <div className="row mt-5 pt-4 d-flex justify-content-center">
                    <div className="col-xl-4 overflow-hidden position-relative">
                        <Link href={'/catalogo/luvas'}>
                            <Image className="img-fluid scale-image" quality={100} fill src="/images/luvas.png" alt="Seção de luvas" />
                            <h2 className="fw-bold display-4 text-uppercase text-white position-absolute text-product text-center">
                                LUVAS
                            </h2>
                        </Link>
                    </div>
                    <div className="col-xl-4 overflow-hidden position-relative">
                        <Link href={'/catalogo/toucas'}>
                            <Image className="img-fluid object-fit-cover scale-image" quality={100} fill src="/images/toucas.png" alt="Seção de toucas" />
                            <h2 className="fw-bold display-4 text-uppercase text-white position-absolute text-product text-center">
                                TOUCAS
                            </h2>
                        </Link>
                    </div>
                    <div className="col-xl-4 overflow-hidden position-relative">
                        <Link href={'/catalogo/mascaras'}>
                            <Image className="img-fluid scale-image" quality={100} fill src="/images/mascaras.png" alt="Seção de máscaras" />
                            <h2 className="fw-bold display-4 text-uppercase text-white position-absolute text-product text-center">
                                MÁSCARAS
                            </h2>
                        </Link>
                    </div>

                    <div className="col-xl-12 d-flex flex-column align-items-center mt-5 gap-4">
                        <Link href="/catalogo" className="btn btn-main text-white scale fs-4">CATÁLOGO COMPLETO</Link>
                        <Link href="" className="btn btn-green text-white scale fs-4 d-flex gap-2 justify-content-center align-items-center">
                            <Image width={25} height={25} src="/icons/whatsapp.svg" alt="WhatsApp ícone" />
                            CHAMAR NO WHATSAPP
                        </Link>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Products;