import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import * as SecureStore from 'expo-secure-store';

const TOKEN_KEY = 'token-jwt';
export const API_URL = 'http://localhost:8081/'; //cambiar a url de la api
const AuthContext = createContext({});

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
    const [authState, setAuthState] = useState({
        token: null,
        authenticated: null
    });

    useEffect(() => {
        const loadToken = async () => {
            const token = await SecureStore.getItemAsync(TOKEN_KEY);
            console.log('stored:', token);

            if (token) {
                axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

                setAuthState({
                    token: token,
                    authenticated: true
                });
            }
        };
        loadToken();
    }, []);

    const register = async (email, password) => {
        try {
           return await axios.post(`${API_URL}/register`, { email, password });    
        } catch (e) {
            return { error: true, msg: e.response.data.msg };
        }
    };

    const login = async (email, password) => {
        try {
            const result = await axios.post(`${API_URL}/auth`, { email, password });
            console.log("login result:", result);
    
            setAuthState({
                token: result.data.token,
                authenticated: true
            });

            axios.defaults.headers.common['Authorization'] = `Bearer ${result.data.token}`;
    
            await SecureStore.setItemAsync(TOKEN_KEY, result.data.token);

            return result;

        } catch (e) {
            return { error: true, msg: e.response.data.msg };
        }
    };

    const logout = async () => {
        await SecureStore.deleteItemAsync(TOKEN_KEY);
        axios.defaults.headers.common['Authorization'] = '';

        setAuthState({
            token: null,
            authenticated: false
        });
    };
    
    const value = {
        onRegister: register,
        onLogin: login,
        onLogout: logout,
        authState
    };
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
