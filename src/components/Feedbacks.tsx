import Image from "next/image";
import FeedbacksCarousel from "./Carousels/Feedbacks";
import InstagramButton from "./Buttons/Instagram";

const Feedbacks = () => {
    return (
        <section className="pb-5">
            <Image className="w-60 flip-vertical" fill src="/images/efeito-onda-linear.svg" alt="Divisão Onda" />

            <h2 className="section-heading display-4 text-center w-100">
                O que nossos clientes <br />
                tem a dizer?
            </h2>

            <FeedbacksCarousel />

            <h3 className="text-center text-white w-100 mt-5 ff-poppins-medium">Siga-nos no instagram e fique por <br />dentro das novidades!</h3>
            <div className="d-flex justify-content-center mt-3 pb-5">
                <InstagramButton />
            </div>
        </section>
    );
}

export default Feedbacks;