'use client'

export const authorizationHeader = () => {
    if (typeof window != "undefined") {
        const jwt = localStorage.getItem("jwt-token");

        return {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${jwt}`,
            },
        }
    }
}