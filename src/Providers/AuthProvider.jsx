import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged,
     signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firbase/firbase.config';

export const AuthContext = createContext(null);

const auth = getAuth(app)
const provider = new GoogleAuthProvider();
const gitProvider = new GithubAuthProvider();

const AuthProvider = ({children}) => {
    const [user , setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const googleLogIn = () => {
        setLoading(true)
       return signInWithPopup(auth, provider)
    }

    const githubLogIn = () => {
        setLoading(true)
        return signInWithPopup(auth, gitProvider)
    }

    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const update = (name, photo) => {
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName:name, photoURL: photo
          })
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    console.log(user)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, loggedUser => {
            setUser(loggedUser)
            setLoading(false)
        })
        return () => {
            unsubscribe()
        }
    })

    const authInfo = {
        user,
        createUser,
        logIn,
        logOut,
        googleLogIn,
        githubLogIn,
        update,
        loading
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;