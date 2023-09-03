import { api } from "@components/api"
import { ILogin } from "@components/interfaces/login.interface"

class UserService {
    async login(user: ILogin){
        const response = await api.post(`/user/auth`, user)
        return response.data
    }
}
export const userService = new UserService()
