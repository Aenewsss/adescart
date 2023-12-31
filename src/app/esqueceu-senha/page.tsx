'use client'

import { IResetPasswordLogin } from "@components/interfaces/reset-password-login.interface";
import { userService } from "@components/services/user.service";
import { useRouter } from "next/navigation";
import { useState } from "react"

const ForgotPassword = () => {

    const { push } = useRouter()

    const [resetPasswordInfo, setResetPasswordInfo] = useState<IResetPasswordLogin>({ email: '', newPassword: '', currentPassword: '' });

    async function handleLogin(event: any) {
        event.preventDefault()

        await userService.changePaswordLogin(resetPasswordInfo)

        push('/login')
    }

    return (
        <section className="vh-100 d-flex justify-content-center align-items-center">
            <form onSubmit={handleLogin}>

                <h3 className="fw-normal mb-3 pb-3" >Entrar</h3>

                <div className="form-outline mb-4">
                    <input onChange={(e) => setResetPasswordInfo({ ...resetPasswordInfo, email: e.target.value })} required type="email" id="form2Example18" className="form-control form-control-lg" />
                    <label className="form-label" htmlFor="form2Example18">Email</label>
                </div>

                <div className="form-outline mb-4">
                    <input onChange={(e) => setResetPasswordInfo({ ...resetPasswordInfo, currentPassword: e.target.value })} required type="password" id="form2Example28" className="form-control form-control-lg" />
                    <label className="form-label" htmlFor="form2Example28">Senha atual</label>
                </div>
                <div className="form-outline mb-4">
                    <input onChange={(e) => setResetPasswordInfo({ ...resetPasswordInfo, newPassword: e.target.value })} required type="password" id="form2Example28" className="form-control form-control-lg" />
                    <label className="form-label" htmlFor="form2Example28">Nova Senha</label>
                </div>

                <div className="pt-1 mb-4">
                    <button className="btn btn-main btn-lg text-white" type="submit">Login</button>
                </div>
            </form>
        </section>
    );
}

export default ForgotPassword;