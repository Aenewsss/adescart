import Image from "next/image";
import Link from "next/link";

const CallWhatsApp = () => {
    return (
        <Link target="_blank" href="https://api.whatsapp.com/send?phone=5561991761509&text=Olá, estou entrando em contato pelo site e gostaria de saber mais sobre A Descart!" className="btn btn-green text-white scale fs-4 d-flex gap-2 justify-content-center align-items-center">
            <Image loading="lazy" width={25} height={25} src="/icons/whatsapp.svg" alt="WhatsApp ícone" />
            <span>CHAMAR NO WHATSAPP</span>
        </Link>
    );
}

export default CallWhatsApp;