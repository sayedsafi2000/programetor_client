import React, { createContext, useEffect, useState } from "react";
import {getAuth, onAuthStateChanged, signInWithPopup} from "firebase/auth";
import app from "../Firebase/Firebase.config";
export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const [user,setUser]= useState(null);
    const providerLogin = (provider)=>{
        return signInWithPopup(auth,provider)
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
        })
        return ()=> unsubscribe();
    },[])


    const authInfo = {user,providerLogin};
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;