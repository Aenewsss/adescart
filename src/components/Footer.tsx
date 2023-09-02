import Image from "next/image";

const Footer = () => {
    return (
        <footer className="w-100">
            <div style={{ width: "100%", height: 500 }}>
                <iframe width="100%" height="500" frameBorder="0" scrolling="no" marginHeight={0} marginWidth={0} src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Ed.%20Patiocapital%20Torre%20Norte%20-%20QS%2003%20Lotes%2003,05,07,09,%20Sala%201004%20-%20Taguatinga,%20Bras%C3%ADlia%20-%20DF,%2071953-000+(A%20Descart%20%20DF)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                </iframe>
            </div>

            <div className="bg-black p-4">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-4 d-flex align-items-center justify-content-center">
                        <Image width={180} height={42} src="/images/logo-transparente.svg" alt="transparente.svg" />
                    </div>
                    <div className="col-md-4 d-flex flex-column align-items-center ">
                        <h6 className="text-main-color fw-bold">A DESCART</h6>
                        <div className="d-flex align-items-center gap-2 mt-3">
                            <Image width={20} height={20} src="/icons/house.svg" alt="transparente.svg" />
                            <div className="text-white">
                                <p className="mb-0 fs-10">
                                    Qs 03 Lotes 3 a 9, Edifício Patiocapital,
                                </p>
                                <p className="fs-10 mb-0">
                                    Torre Norte,Sala 1004 - Brasília DF
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 d-flex d-flex align-items-center justify-content-center">
                        <div className="text-white ">
                            <h6 className="text-main-color fw-bold">REDES SOCIAIS</h6>
                            <div className="d-flex flex-column gap-2  mt-3">

                                <div className="d-flex gap-2">
                                    <Image width={20} height={20} src="/icons/mail.svg" alt="transparente.svg" />
                                    <p className="fs-10 mb-0">adescartdf@gmail.com</p>
                                </div>
                                <div className="d-flex gap-2">
                                    <Image width={20} height={20} src="/icons/whatsapp.svg" alt="transparente.svg" />
                                    <p className="fs-10 mb-0">(61) 9 9176-1509</p>
                                </div>
                                <div className="d-flex gap-2">
                                    <Image width={20} height={20} src="/icons/instagram.svg" alt="transparente.svg" />
                                    <p className="fs-10 mb-0">adescartdf</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white p-3">
                <p className="text-center mb-0 fs-10 ">
                    Copyright © 2023 All rights reserved | Site desenvolvido por
                    <a className="text-main-color" href="https://aenamartinelli.com.br">&nbsp;aenamartinelli.com.br</a>
                </p>
            </div>
        </footer>
    );
}

export default Footer;