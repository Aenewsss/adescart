import Image from "next/image";
import CallWhatsApp from "./Buttons/CallWhatsapp";

const Differentials = () => {
    return (
        <section className="position-relative ">

            <div className="d-flex justify-content-between ">
                <div className="d-flex justify-content-center mt-5 z-1 w-50">
                    <div className="d-flex flex-column align-items-start gap-4">

                        <h2 className="section-heading after-none display-4 text-start ff-poppins-medium d-block">Por que escolher <br />A Descart?</h2>

                        <div className="d-flex flex-column gap-3">
                            <div className="d-flex align-items-center gap-3 bg-linear-differentials">
                                <Image quality={100} width={40} height={40} src="/icons/chat.svg" alt="Ícone chat" />
                                <p className="text-white mb-0 fs-5">Atendimento rápido e de qualidade</p>
                            </div>
                            <div className="d-flex align-items-center gap-3 bg-linear-differentials">
                                <Image quality={100} width={40} height={40} src="/icons/coins.svg" alt="Ícone moeda" />
                                <p className="text-white mb-0 fs-5"> Variedade de produtos com preço justo</p>
                            </div>
                            <div className="d-flex align-items-center gap-3 bg-linear-differentials">
                                <Image quality={100} width={40} height={40} src="/icons/heart.svg" alt="Ícone coração" />
                                <p className="text-white mb-0 fs-5"> Inúmeros clientes satisfeitos</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="differentials-bg-whats w-50 d-flex align-items-center justify-content-center  flex-column">
                    <Image style={{ maxWidth: 300 }} fill src="/images/logo-branca.svg" alt="Logo Branca A Descart" />
                    <CallWhatsApp />
                </div>
            </div>
            <Image className="position-absolute bottom-0 z-0 w-60" fill src="/images/efeito-onda-linear.svg" alt="Efeito Onda Linear" />

        </section>
    );
}

export default Differentials;