import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";



export const AuthContext = createContext(null);
const FirebaseProvider = ({children}) => {
    const [user, setUser] = useState(null);
console.log(user);
    // create user 
    const createUser = (email, password) =>{
     return createUserWithEmailAndPassword(auth, email, password)
    }


    // sign in user
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // google login

// observer
useEffect(() => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
         setUser(user)
        } 
      });

},[])

    const allValue = {
        createUser,
        signInUser
    }
    return (
        <AuthContext.Provider value={allValue}>
           {children}
        </AuthContext.Provider>
    );
};

export default FirebaseProvider;