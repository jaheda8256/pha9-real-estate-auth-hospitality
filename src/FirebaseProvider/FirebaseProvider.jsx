import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";



export const AuthContext = createContext(null);
// social auth provider
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const FirebaseProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
   
console.log(user);
    // create user 
    const createUser = (email, password) =>{
        setLoading(true);
     return createUserWithEmailAndPassword(auth, email, password)
    }


    // sign in user
    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    // google login
    const googleLogin = () =>{
        setLoading(true);
       return signInWithPopup(auth, googleProvider)
    }
    // github login
    const githubLogin = () =>{ 
        setLoading(true);
       return signInWithPopup(auth, githubProvider)
    }

    // logout 
    const logout = () => {
        setUser(null)
        signOut(auth)
    }

// observer
useEffect(() => {
 const unSubscribe =  onAuthStateChanged(auth, (user) => {
        if (user) {
         setUser(user)
         setLoading(false);
        } 
      });
      return () =>{
        unSubscribe()
      }

},[])

    const allValues = {
        createUser,
        signInUser,
        googleLogin,
        githubLogin,
        logout,
        user,
        setUser,
         loading,
    }
    return (
        <AuthContext.Provider value={allValues}>
           {children}
        </AuthContext.Provider>
    );
};

export default FirebaseProvider;