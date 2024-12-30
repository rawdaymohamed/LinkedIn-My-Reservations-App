import { useEffect, useState } from "react"
import { getCurrentUser } from "./getCurrentUser";
import { addAuthListener } from "./addAuthListener"
export const useAuth = () => {
    const [authInfo, setAuthInfo] = useState(() => {
        const user = getCurrentUser();
        const isLoading = !user;
        return { isLoading, user }; // initial value of authInfo state
    });
    useEffect(() => {
        // This function will be called after the component unmounts
        const unsubscribe = addAuthListener(user => {
            setAuthInfo({ isLoading: false, user })
        });
        return unsubscribe;
    }, [])
    return authInfo;
}