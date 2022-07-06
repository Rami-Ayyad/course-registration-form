import { useContext, createContext, useState } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    GoogleAuthProvider,
    FacebookAuthProvider,
    signInWithPopup
} from "firebase/auth";
import { auth } from "../services/firebase";


const userContext = createContext();

export function UserContextProvider({ children }) {

    const [email, setEmail] = useState("")
    const [fName, setfName] = useState("")
    const [lName, setlName] = useState("")

    function signUp(email, password) {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    
    function signUpWithGoogle() {
        const googleAuthProvider = new GoogleAuthProvider()
        return signInWithPopup(auth, googleAuthProvider)
    }
    
    function signUpWithFacebook() {
        const facebookAuthProvider = new FacebookAuthProvider()
        return signInWithPopup(auth, facebookAuthProvider)
    }   

    return (
    <userContext.Provider value={{ 
        signUp, email, setEmail, signUpWithGoogle, signUpWithFacebook,
        fName, setfName, lName, setlName
        }}>
        {children}
    </userContext.Provider>
    )
    
}

export function useUserContext() {
    return useContext(userContext)
}