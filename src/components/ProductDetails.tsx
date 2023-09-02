import Image from "next/image";
import BuyWhatsapp from "./Buttons/BuyWhatsapp";

const ProductDetails = () => {
    return (
        <section className="mt-5 mb-5 pb-5">
            <div className="row">
                <div className="col-xl-6">
                    <Image width={300} height={500} src="/produto-exemplo.png" alt="produto" />
                </div>

                <div className="col-xl-6">
                    <div className="d-flex gap-3">
                        <h4 className="fw-bold text-black">Luva preta unigloves</h4>
                        <h5 className="fw-bold text-black">R$ 29,99</h5>
                    </div>

                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores inventore aspernatur</p>

                    <BuyWhatsapp />
                </div>

            </div>

        </section>
    );
}

export default ProductDetails;