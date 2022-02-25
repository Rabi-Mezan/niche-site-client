import initAuth from "../Firebase/init";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, getIdToken } from "firebase/auth";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";


initAuth()

const googleProvider = new GoogleAuthProvider();
const auth = getAuth();

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [isloading, setIsLoading] = useState(true)
    const [error, setError] = useState('')
    const [admin, setAdmin] = useState(false)
    const history = useHistory()




    //register user
    const registerUser = (name, email, password) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const newUser = { email: email, displayName: name }
                setUser(newUser);
                saveUser(email, name);
                history.push('/home')

            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => {
                setIsLoading(false)
            })
    }




    //login with email password
    const login = (email, password) => {
        setIsLoading(true)
        return signInWithEmailAndPassword(auth, email, password)

    }


    // google signin
    const googlesignin = () => {
        setIsLoading(true)
        return signInWithPopup(auth, googleProvider)

    }



    // observbe user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                getIdToken(user)
                    .then((token => localStorage.setItem('token', token)))
                setUser(user)
            }
            else {
                setUser({})

            }

            setIsLoading(false)

        });
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


    //check admin
    useEffect(() => {

        fetch(`http://localhost:5000/users/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setAdmin(data.admin)
            })
    }, [user?.email])


    // logout
    const logout = () => {
        signOut(auth).then(() => {
            setUser({})
            history.push('/')
        }).catch((error) => {
            const errorMessage = error.message;
            setError(errorMessage);
        });
    }


    return {
        user,
        setUser,
        googlesignin,
        login,
        saveUser,
        logout,
        admin,
        isloading,
        registerUser,
        setIsLoading

    }

}

export default useFirebase;