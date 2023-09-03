'use client'

import { IResetPasswordAdmin } from "@components/interfaces/reset-password.interface";
import { userService } from "@components/services/user.service";
import { useState } from "react"

const ForgotPassword = () => {

    const [resetPasswordInfo, setResetPasswordInfo] = useState<IResetPasswordAdmin>({ email: '', newPassword: '', repeatPassword: '' });

    async function handleLogin(event: any) {
        event.preventDefault()

        const result = await userService.changePaswordAdmin(resetPasswordInfo)
        alert(result)
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
                    <input onChange={(e) => setResetPasswordInfo({ ...resetPasswordInfo, newPassword: e.target.value })} required type="password" id="form2Example28" className="form-control form-control-lg" />
                    <label className="form-label" htmlFor="form2Example28">Nova atual</label>
                </div>
                <div className="form-outline mb-4">
                    <input onChange={(e) => setResetPasswordInfo({ ...resetPasswordInfo, repeatPassword: e.target.value })} required type="password" id="form2Example28" className="form-control form-control-lg" />
                    <label className="form-label" htmlFor="form2Example28">Repetir Senha</label>
                </div>

                <div className="pt-1 mb-4">
                    <button className="btn btn-main btn-lg text-white" type="submit">Login</button>
                </div>
            </form>
        </section>
    );
}

export default ForgotPassword;