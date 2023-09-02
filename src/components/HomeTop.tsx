import Image from "next/image";

const HomeTop = () => {
    return (
        <section>
            <div className="home-top d-flex align-items-center justify-content-center">
                <h1 className="text-white fw-light text-center fst-italic">
                    Pensando em você, oferecemos o melhor <br className="d-md-block d-none" />
                    atendimento com o melhor preço.</h1>
            </div>
            <div className="bg-main-color w-100 p-2">
                <div className="container d-flex flex-wrap justify-content-sm-center text-white gap-5 fs-5">
                    <div className="d-flex align-items-center gap-2 fst-italic">
                        <Image width={40} height={40} src="/icons/chat-message.svg" alt="Ícone mensagem" />
                        <p className="mb-0">Atendimento <span className="fw-bold">rápido</span></p>
                    </div>
                    <div className="d-flex align-items-center gap-2 fst-italic">
                        <Image width={40} height={40} src="/icons/credit-card.svg" alt="Ícone cartão de crédito" />
                        <p className="mb-0">Preço <span className="fw-bold">justo</span></p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HomeTop;