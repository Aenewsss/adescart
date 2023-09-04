import Image from "next/image";
import Link from "next/link";

const InstagramButton = () => {
    return (
        <Link href="" className="w-400 text-main-color btn bg-white scale fs-4 d-flex gap-2 justify-content-center align-items-center">
            <Image loading="lazy" width={25} height={25} src="/icons/instagram-main-color.svg" alt="Instagram ícone" />
            adescartdf
        </Link>
    );
}

export default InstagramButton;