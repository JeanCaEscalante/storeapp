import React, {createContext, useState} from "react";
import { authLogin, authProfile } from "../services/authentication";


const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [isAuth, setIsAuth] = useState(sessionStorage.getItem('token'));

    const AuthProfile = async (token) => {
        return await authProfile(token)
    }

    const AuthLogin = async (object) => {
        const token = await authLogin(object);

        if(token){
            sessionStorage.setItem('token', token)
        }
        else {
            token
        }

       return token ? sessionStorage.setItem('token', token) : token

    }
} 