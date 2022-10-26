import React, { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../Firebase/Firebase.config";
export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    // Google authentication 
    const providerLogin = (provider) => {
        return signInWithPopup(auth, provider)
    }
    // Github Authentication 
    const gitProviderLogin = (provider)=>{
        return signInWithPopup(auth, provider)
    }
    // For log in and user create get data from outside
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        })
        return () => unsubscribe();
    }, [])
    // create user by using email and password 
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // login system 
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const updateUserProfile =(profile)=>{
        return updateProfile(auth.currentUser,profile)
    }
    // Logout system 
    const userSignOut = () => {
        setLoading(true);
        return signOut(auth);
    }
    const authInfo = { user, providerLogin, userSignOut, createUser, signIn,loading,updateUserProfile ,gitProviderLogin};
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;