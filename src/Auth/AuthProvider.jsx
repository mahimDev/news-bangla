import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";


export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    // user create
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // user login
    const userLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
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
        userLogout
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;