import initAuth from "../Firebase/init";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, getIdToken } from "firebase/auth";
import { useEffect, useState } from "react";


initAuth()

const googleProvider = new GoogleAuthProvider();
const auth = getAuth();

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [isloading, setIsLoading] = useState(true)


    //register user
    const registerUser = (name, email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                const newUser = { email, displayName: name }
                setUser(newUser);
                saveUser(email, name);

            })
            .catch((error) => {

            });
    }



    //login with email password
    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)

    }


    // google signin
    const googlesignin = () => {
        return signInWithPopup(auth, googleProvider)

    }


    // observbe user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                getIdToken(user)
                    .then((token => localStorage.setItem('token', token)))
                setUser(user)
            } else {
                setUser({})

            }
            setIsLoading(false)
        })
        return () => unsubscribe()
    }, [])


    //save user
    const saveUser = (email, displayName) => {
        const user = { email, displayName };
        fetch('https://speeddo.herokuapp.com/users', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }



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
        setUser,
        googlesignin,
        login,
        saveUser,
        logout,
        isloading,
        registerUser,
        setIsLoading

    }

}

export default useFirebase;