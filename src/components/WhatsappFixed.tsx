import Image from "next/image";
import Link from "next/link";

const WhatsAppFixed = () => {
    return (
        <div className="position-fixed whats-fixed">
            <Link href="https://api.whatsapp.com/send?phone=5561991761509&text=Olá, estou entrando em contato pelo site e gostaria de saber mais sobre A Descart!" target="_blank">
                <Image fill src="/icons/whats-icon.png" alt="WhatsApp Ícone" />
            </Link>
        </div>
    );
}

export default WhatsAppFixed;