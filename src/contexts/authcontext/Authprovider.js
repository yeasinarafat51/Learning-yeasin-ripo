import React, { createContext, useEffect, useState } from 'react';
import{createUserWithEmailAndPassword, getAuth,  onAuthStateChanged,  signInWithEmailAndPassword,  signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import app from '../../firebase/firebase.config';

 export const AuthContext =createContext();
 const auth = getAuth(app)

const Authprovider = ({children}) => {
    const [user, setuser] = useState('');
    const [loading, setloading] = useState(true)

    const providerLogin = (provider) =>{
        setloading(true);
        return signInWithPopup(auth, provider);
    }
    const GitLogin = (provider) =>{
        setloading(true);
        return signInWithPopup(auth, provider);
    }

    const createuser = (email, password) => {
        setloading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signin =(email, password) => {
        setloading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const userprofile = (profile) =>{
        return updateProfile(auth.currentUser, profile);
    } 

    const logout = () => {
        setloading(true);
        return signOut(auth)
    }

   useEffect( () =>{
    const unsubscribe =  onAuthStateChanged(auth, (currentuser) =>{
            console.log('user nside state change', currentuser);
            setuser(currentuser);
            setloading(false);
        })

        return () =>{
            unsubscribe();
        }
    }, [])

    const authinfo = {user,providerLogin,userprofile, logout, createuser, signin, loading, GitLogin}
    return (
        <AuthContext.Provider value ={authinfo}>
            {children}
        </AuthContext.Provider>
       
    );
};

export default Authprovider;