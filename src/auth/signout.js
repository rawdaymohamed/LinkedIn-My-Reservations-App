import { getAuth, signOut } from "firebase/auth";


export const signout = async () => {
    const auth = getAuth();
    try {
        await signOut(auth);
    } catch (error) {
        throw new Error("Error signout")
    }
}