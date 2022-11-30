import Context from "@mui/base/TabsUnstyled/TabsContext";
import React, {createContext, useState, useEffect, useMemo, useContext} from "react";
import { authLogin, authProfile } from "../services/authentication";


const AuthContext = createContext();

export const AuthProvider = ({props}) => {
    const [isAuth, setIsAuth] = useState(false);
    const [user,setUser] = useState(null);

    useEffect(() => {
        const loggedUserJSON = window.sessionStorage.getItem('token');
        if (loggedUserJSON) {
          AuthProfile(loggedUserJSON)
          setIsAuth(true)
        };
      }, []);

    const AuthProfile = async (token) => {
        const logged = await authProfile(token)
        setUser(logged);
    }

    const AuthLogin = async (object) => {
        try {
            const token = await authLogin(object);
            AuthProfile(token)
            setIsAuth(true)
        } catch (error) {
            console.log(error)
        }
    }

    const AuthLogout = () => {
        setUser(null)
        setIsAuth(false)
        window.sessionStorage.removeItem('token')
    }

    const value = useMemo(() => {
        return ({
            isAuth,
            user,
            AuthLogin,
            AuthLogout
        })
    },[isAuth,user])

    return <AuthContext.Provider value={value} {...props}/>
} 

export const useUser = () => {
    const context = useContext(AuthContext);
    if(!contex){
        throw new Error('useUser not contain AuthContext')
    }

    return context;
}