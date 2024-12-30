import { getAuth, onAuthStateChanged } from "firebase/auth";

export const addAuthListener = async (callback) => {
    const auth = getAuth();
    const onChange = (user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/auth.user
            // const uid = user.uid;
            callback({});
        } else {
            // User is signed out

            callback(null);
        }
    }
    onAuthStateChanged(auth, onChange);

}