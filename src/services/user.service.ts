import { api } from "@components/api"
import { ILogin } from "@components/interfaces/login.interface"
import { IResetPasswordLogin } from "@components/interfaces/reset-password-login.interface"
import { IResetPasswordAdmin } from "@components/interfaces/reset-password.interface"

class UserService {
    async login(user: ILogin){
        const response = await api.post(`/user/auth`, user)
        return response.data
    }

    async changePaswordAdmin(dto: IResetPasswordAdmin){
        const response = await api.post(`/user/change-password`, dto)
        return response.data
    }

    async changePaswordLogin(dto: IResetPasswordLogin){
        const response = await api.post(`/user/change-password-login`, dto)
        return response.data
    }
}
export const userService = new UserService()
