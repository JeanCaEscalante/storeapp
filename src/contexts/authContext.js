import React, {createContext, useState, useEffect, useMemo, useContext} from "react";
import { authLogin, authProfile } from "../services/authentication";
import { useNavigate } from "react-router-dom";
const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [isAuth, setIsAuth] = useState(false);
    const [user,setUser] = useState(null);
    const navigate = useNavigate()
    useEffect(() => {
        const loggedUserJSON = localStorage.getItem('token');
        if (loggedUserJSON) {
          AuthProfile(loggedUserJSON)
          setIsAuth(true)
          navigate('/')
        }
      }, []);

    const AuthProfile = async (token) => {
        const logged = await authProfile(token)
        setUser(logged);
    }

    const AuthLogin = async (object) => {
        try {
            const {access_token} = await authLogin(object);
            AuthProfile(access_token)
            setIsAuth(true)
            navigate('/')
        } catch (error) {
            console.log(error)
        }
    }

    const AuthLogout = () => {
        setUser(null)
        setIsAuth(false)
        localStorage.removeItem('token')
    }

    const value = useMemo(() => {
        return ({
            isAuth,
            user,
            AuthLogin,
            AuthLogout
        })
    },[isAuth,user])

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
} 

export const useUser = () => {
    const context = useContext(AuthContext);
    if(!context){
        throw new Error('useUser not contain AuthContext')
    }

    return context;
}