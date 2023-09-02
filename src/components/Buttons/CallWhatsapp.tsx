import Image from "next/image";
import Link from "next/link";

const CallWhatsApp = () => {
    return (
        <Link href="" className="btn btn-green text-white scale fs-4 d-flex gap-2 justify-content-center align-items-center">
            <Image width={25} height={25} src="/icons/whatsapp.svg" alt="WhatsApp ícone" />
            CHAMAR NO WHATSAPP
        </Link>
    );
}

export default CallWhatsApp;