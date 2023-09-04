import Image from "next/image";
import SearchField from "./SearchField";
import Link from "next/link";

const CatalogTop = () => {
    return (
        <section>
            <div className="catalog-top d-flex align-items-center justify-content-center">
                <h1 className="text-white fw-light text-center fst-italic display-4">Conheça nossos produtos</h1>
            </div>
            <div className="bg-main-color w-100 p-2">
                <div className="container d-flex flex-wrap justify-content-md-between  justify-content-center text-white gap-5 fs-5">
                    <div>
                        <SearchField />
                    </div>
                    <Link href={{ pathname: '/catalogo', query: { category: "glove" } }} className="text-white fw-light text-uppercase align-self-center">Luvas</Link>
                    <Link href={{ pathname: '/catalogo', query: { category: "mask" } }} className="text-white fw-light text-uppercase align-self-center">Máscaras</Link>
                    <Link href={{ pathname: '/catalogo', query: { category: "medicalCap" } }} className="text-white fw-light text-uppercase align-self-center">Toucas</Link>
                    <Link href={{ pathname: '/catalogo', query: { category: "syringe" } }} className="text-white fw-light text-uppercase align-self-center">Seringas</Link>
                    <Link href={{ pathname: '/catalogo', query: { category: "apron" } }} className="text-white fw-light text-uppercase align-self-center">Avental</Link>
                    <Link href={{ pathname: '/catalogo', query: { category: "other" } }} className="text-white fw-light text-uppercase align-self-center">Outros</Link>
                </div>
            </div>
        </section>
    );
}

export default CatalogTop;