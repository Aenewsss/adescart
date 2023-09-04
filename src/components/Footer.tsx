import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="w-100">
            <div style={{ width: "100%", height: 500 }}>
                <iframe width="100%" height="500" frameBorder="0" scrolling="no" marginHeight={0} marginWidth={0} src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=AdescartDF+(ADescart%20DF)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                </iframe>
            </div>

            <div className="bg-black p-4">
                <div className="row d-flex justify-content-center gap-md-0 gap-3">
                    <div className="col-md-4 d-flex align-items-center justify-content-center">
                        <Image loading="lazy" width={180} height={42} src="/images/logo-transparente.svg" alt="transparente.svg" />
                    </div>
                    <div className="col-md-4 d-flex flex-column align-items-center ">
                        <h6 className="text-main-color fw-bold mb-0 d-md-flex d-none">A DESCART</h6>
                        <Link target="_blank" href="https://www.google.com/maps/place/AdescartDF/@-15.8442562,-48.0489506,17z/data=!3m1!4b1!4m6!3m5!1s0x935a3332649dbb4b:0x1cbbf4eedea6c382!8m2!3d-15.8442563!4d-48.0440797!16s%2Fg%2F11l1xf_p72?hl=en&entry=ttu" className="d-flex align-items-center gap-2 mt-3">
                            <Image loading="lazy" width={20} height={20} src="/icons/house.svg" alt="transparente.svg" />
                            <div className="text-white">
                                <p className="mb-0 fs-10">
                                    Qs 03 Lotes 3 a 9, Edifício Patiocapital,
                                </p>
                                <p className="fs-10 mb-0">
                                    Torre Norte,Sala 1004 - Brasília DF
                                </p>
                            </div>
                        </Link>
                    </div>
                    <div className="col-md-4 d-flex d-flex align-items-center justify-content-center">
                        <div className="text-white ">
                            <h6 className="text-main-color fw-bold mb-0">REDES SOCIAIS</h6>
                            <div className="d-flex flex-column gap-2 mt-3">
                                <Link target="_blank" href="mailto:adescartdf@gmail.com" className="d-flex gap-2 fs-10 text-white mb-0">
                                    <Image loading="lazy" width={20} height={20} src="/icons/mail.svg" alt="transparente.svg" />
                                    <span>adescartdf@gmail.com</span>
                                </Link>
                                <Link target="_blank" href="https://api.whatsapp.com/send?phone=5561991761509&text=Olá, estou entrando em contato pelo site e gostaria de saber mais sobre A Descart!" className="d-flex gap-2 fs-10 text-white mb-0">
                                    <Image loading="lazy" width={20} height={20} src="/icons/whatsapp.svg" alt="transparente.svg" />
                                    <span>(61) 9 9176-1509</span>
                                </Link>
                                <Link target="_blank" href="https://www.instagram.com/adescartdf/" className="d-flex gap-2 fs-10 text-white mb-0">
                                    <Image loading="lazy" width={20} height={20} src="/icons/instagram.svg" alt="transparente.svg" />
                                    <span>adescartdf</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white p-3">
                <Link className="text-dark" href="https://aenamartinelli.com.br">
                    <p className="text-center mb-0 fs-10 fw-bold">
                        Copyright © 2023 All rights reserved | Site desenvolvido por
                        &nbsp;
                        <span className="text-main-color">
                            aenamartinelli.com.br
                        </span>
                    </p>
                </Link>
            </div>
        </footer>
    );
}

export default Footer;