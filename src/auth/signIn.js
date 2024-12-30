import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

// Wrapper function so the code doesn't rely on firebase 

export const signIn = async (email, password) => {
    const auth = getAuth();
    try {
        const result = await signInWithEmailAndPassword(auth, email, password);
        return {}; // if need to change firebase to another vendor

    } catch (error) {
        throw new Error("Error signing in");
    }
}
