import initAuth from "../Firebase/init";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";


initAuth()

const googleProvider = new GoogleAuthProvider();
const auth = getAuth();

const useFirebase = () => {
    const [user, setUser] = useState()

    // google signin

    const googlesignin = () => {

        signInWithPopup(auth, googleProvider)
            .then((result) => {

                const user = result.user;

            }).catch((error) => {

            });
    }


    // observbe user
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser('')
            }
        });
    }, [])

    // logout
    const logout = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });
    }


    return {
        user,
        googlesignin,
        logout,

    }

}

export default useFirebase;