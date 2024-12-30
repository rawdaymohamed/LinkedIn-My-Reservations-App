import { getAuth, signOut } from "firebase/auth";

const auth = getAuth();

export const signout = async () => {
    try {
        await signOut(auth);
    } catch (error) {
        throw new Error("Error signout")
    }
}