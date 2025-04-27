import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";


export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const googleProvider = new GoogleAuthProvider()
    // user create
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // user login
    const userLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    // login with google
    const loginWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }
    //  user logout
    const userLogout = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })
        return () => {
            return unsubscribe()
        }
    }, [])
    const authInfo = {
        user,
        userLogin,
        createUser,
        loginWithGoogle,
        userLogout
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;