import React, { createContext, useEffect, useState } from "react";
import {getAuth, onAuthStateChanged, signInWithPopup, signOut} from "firebase/auth";
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

    const userSignOut = ()=>{
        return signOut(auth);
    }

    const authInfo = {user,providerLogin,userSignOut};
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;