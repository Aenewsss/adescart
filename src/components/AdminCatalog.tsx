import Image from "next/image";
import Link from "next/link";
import ProductsCount from "./ProductsCount";

const AdminCatalog = () => {
    return (
        // <section className="container">
        //     <div className="row d-flex justify-content-center">
        //         <div className="col-xl-2 mt-2 position-relative">
        //             <Link href="" className="overflow-hidden ">
        //                 <Image loading="lazy" className="object-fit-cover img-fluid scale" src="/images/luvas.png" fill alt="luvas.png" />
        //                 <h2 className="text-uppercase ms-2 mb-2 position-absolute bottom-0 text-white">Luvas</h2>
        //             </Link>
        //         </div>
        //         <div className="col-xl-2 mt-2 position-relative">
        //             <Link href="" className="overflow-hidden ">
        //                 <Image loading="lazy" className="object-fit-cover img-fluid scale" src="/images/luvas.png" fill alt="luvas.png" />
        //                 <h2 className="text-uppercase ms-2 mb-2 position-absolute bottom-0 text-white">Máscaras</h2>
        //             </Link>
        //         </div>
        //         <div className="col-xl-2 mt-2 position-relative">
        //             <Link href="" className="overflow-hidden ">
        //                 <Image loading="lazy" className="object-fit-cover img-fluid scale" src="/images/luvas.png" fill alt="luvas.png" />
        //                 <h2 className="text-uppercase ms-2 mb-2 position-absolute bottom-0 text-white">Toucas</h2>
        //             </Link>
        //         </div>
        //         <div className="col-xl-2 mt-2 position-relative">
        //             <Link href="" className="overflow-hidden ">
        //                 <Image loading="lazy" className="object-fit-cover img-fluid scale" src="/images/luvas.png" fill alt="luvas.png" />
        //                 <h2 className="text-uppercase ms-2 mb-2 position-absolute bottom-0 text-white">Aventais</h2>
        //             </Link>
        //         </div>
        //         <div className="col-xl-2 mt-2 position-relative">
        //             <Link href="" className="overflow-hidden ">
        //                 <Image loading="lazy" className="object-fit-cover img-fluid scale" src="/images/luvas.png" fill alt="luvas.png" />
        //                 <h2 className="text-uppercase ms-2 mb-2 position-absolute bottom-0 text-white">Seringas</h2>
        //             </Link>
        //         </div>
        //         <div className="col-xl-2 mt-2 position-relative">
        //             <Link href="" className="overflow-hidden ">
        //                 <Image loading="lazy" className="object-fit-cover img-fluid scale" src="/images/luvas.png" fill alt="luvas.png" />
        //                 <h2 className="text-uppercase ms-2 mb-2 position-absolute bottom-0 text-white">Outros</h2>
        //             </Link>
        //         </div>
        //     </div>
        // </section>
        <ProductsCount />
    );
}

export default AdminCatalog;