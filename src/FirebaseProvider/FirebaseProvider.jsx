import { createContext } from "react";



export const AuthContext = createContext(null);
const FirebaseProvider = ({children}) => {
    const allValue = { name: 'test'}
    return (
        <AuthContext.Provider value={allValue}>
           {children}
        </AuthContext.Provider>
    );
};

export default FirebaseProvider;