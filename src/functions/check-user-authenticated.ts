export const checkUserAuthenticated = () => {
    if (typeof window !== 'undefined') {
        const userToken = localStorage.getItem("jwt-token")
        return !!userToken
    }
}