'use client'

import { useState } from "react";

const LoginForm = () => {

    const [loginInfo, setLoginInfo] = useState();

    async function handleLogin(event:any) {
        event.preventDefault()

        alert('login')
    }

    return (
        <form onSubmit={handleLogin}>

            <h3 className="fw-normal mb-3 pb-3" >Entrar</h3>

            <div className="form-outline mb-4">
                <input required type="email" id="form2Example18" className="form-control form-control-lg" />
                <label className="form-label" htmlFor="form2Example18">Email</label>
            </div>

            <div className="form-outline mb-4">
                <input required type="password" id="form2Example28" className="form-control form-control-lg" />
                <label className="form-label" htmlFor="form2Example28">Senha</label>
            </div>

            <div className="pt-1 mb-4">
                <button className="btn btn-main btn-lg text-white" type="submit">Login</button>
            </div>

            <p className="small mb-5 pb-lg-2"><a className="text-muted" href="/esqueceu-senha">Esqueceu a senha?</a></p>

        </form>
    );
}

export default LoginForm;