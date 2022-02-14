import initAuth from "../Firebase/init";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";


initAuth()

const googleProvider = new GoogleAuthProvider();
const auth = getAuth();

const useFirebase = () => {
    const [user, setUser] = useState()
    const [isloading, setIsLoading] = useState(true)

    // google signin

    const googlesignin = () => {
        setIsLoading(true)
        return signInWithPopup(auth, googleProvider)

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
        isloading,
        setIsLoading

    }

}

export default useFirebase;