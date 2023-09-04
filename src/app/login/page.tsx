import LoginForm from "@components/components/Forms/LoginForm";
import Image from "next/image";

const LoginPage = () => {
    return (
        <section className="vh-100">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-6 mt-md-0 mt-5 text-black d-flex align-items-center flex-column justify-content-center">

                        <div className="px-5 ms-xl-4">
                            <Image loading="lazy" width={200} height={100} alt="Logo A Descart" src="/images/logo-transparente.svg" />
                        </div>

                        <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">

                       <LoginForm />

                        </div>

                    </div>
                    <div className="col-sm-6 px-0 d-none d-sm-block">
                        <Image loading="lazy" fill src="/images/luvas.png" quality={100}
                            alt="Login image" className="w-100 vh-100" style={{objectFit: 'cover', objectPosition: 'left'}} />
                    </div>
                </div>
            </div>
        </section>

    );
}

export default LoginPage;