import { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [userLocation, setUserLocation] = useState({
        longitude: -71.1246826115983,
        latitude: 42.40776531464709,
    });

    const setAuth = authUser => {
        setUser(authUser)
    }

    const setUserData = userData => {
        setUser({...userData})
    }

    return (
        <AuthContext.Provider value={{user, setAuth, setUserData, setUserLocation, userLocation}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);