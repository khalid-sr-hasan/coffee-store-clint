import React, { createContext, useEffect, useState } from "react";
import auth from "../Auth/firebase.init";
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
} from "firebase/auth";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    console.log(user);

    // create register
    const registerUser = (email, password) => {
        console.log(email, "pass:", password);
        setIsLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // create login
    const loginUser = (email, password) => {
        setIsLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    // logout
    const logOut = () => {
        setIsLoading(true);
        return signOut(auth);
    };

    // auth state change
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setIsLoading(false);
        });
        return () => unSubscribe;
    }, []);

    const authInfo = { user, registerUser, loginUser, logOut, isLoading };
    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;
