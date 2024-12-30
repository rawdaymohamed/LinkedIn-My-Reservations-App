import { getAuth } from "firebase/auth";

export const getCurrentUser = async () => {
    const auth = getAuth();
    const user = auth.currentUser;
    if (!user) return null;
    return { user }
}

