'use client'

import { APP_ROUTES } from "@components/constants/routes";
import { checkUserAuthenticated } from "@components/functions/check-user-authenticated";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {

    const { push } = useRouter()

    const isUserAuthenticated = checkUserAuthenticated();

    useEffect(() => {
        if (!isUserAuthenticated) push(APP_ROUTES.public.login)
    }, [isUserAuthenticated, push])

    function renderComponent() {
        if (!isUserAuthenticated) return null
        if (isUserAuthenticated) return children
    }

    return renderComponent()
}
    export default PrivateRoute;
    