import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
<<<<<<< HEAD
import SInfo from 'react-native-sensitive-info'; // Importa react-native-sensitive-info

const TOKEN_KEY = 'token-jwt';
export const API_URL = 'http://192.168.1.1:8081/'; //cambiar a url de la api
const AuthContext = createContext({});

// Valores predeterminados para desarrollo
const DUMMY_USER = "admin";
const DUMMY_PASS = "admin";
const DUMMY_TOKEN = "dummy-token";

=======
import * as SecureStore from 'expo-secure-store';

const TOKEN_KEY = 'token-jwt';
export const API_URL = 'http://localhost:8081/'; //cambiar a url de la api
const AuthContext = createContext({});

>>>>>>> cb4f0b4f7e2dab65325df574762a4668ec9e8043
export const useAuth = () => {
    return useContext(AuthContext);
};

<<<<<<< HEAD


export const authAxios = axios.create({
    API_URL,
    withCredentials: true
});

export const AuthProvider = ({ children }) => {
    const [authState, setAuthState] = useState({
        token: null,
        authenticated: false
=======
export const AuthProvider = ({ children }) => {
    const [authState, setAuthState] = useState({
        token: null,
        authenticated: null
>>>>>>> cb4f0b4f7e2dab65325df574762a4668ec9e8043
    });

    useEffect(() => {
        const loadToken = async () => {
<<<<<<< HEAD
            // Cambia el método de obtención del token
            const token = await SInfo.getItem(TOKEN_KEY, {});
=======
            const token = await SecureStore.getItemAsync(TOKEN_KEY);
>>>>>>> cb4f0b4f7e2dab65325df574762a4668ec9e8043
            console.log('stored:', token);

            if (token) {
                axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
<<<<<<< HEAD
=======

>>>>>>> cb4f0b4f7e2dab65325df574762a4668ec9e8043
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
<<<<<<< HEAD
            return { error: true, msg: e.response?.data?.msg || "Error en inicio de sesión" };
         };
        
=======
            return { error: true, msg: e.response.data.msg };
        }
>>>>>>> cb4f0b4f7e2dab65325df574762a4668ec9e8043
    };

    const login = async (email, password) => {
        try {
<<<<<<< HEAD

            console.log(`Attempting to login with email: ${email} and password: ${password}`);

            if (email === DUMMY_USER && password === DUMMY_PASS) {
                console.log("Logging in as admin...");

                setAuthState({
                    token: DUMMY_TOKEN,
                    authenticated: true
                });

                  await SInfo.setItem(TOKEN_KEY, DUMMY_TOKEN, {});
                  return { data: { token: DUMMY_TOKEN } };
                } else {
                  // Si las credenciales no son correctas, retorna un error
                  return { error: true, msg: "Credenciales incorrectas" };
                }
              } catch (e) {
                return { error: true, msg: e.message || "Error desconocido" };
              }
            };
            
            //const result = await axios.post(`${API_URL}/auth`, { username, password });
            //console.log("login result:", result);
    
            //setAuthState({
              //  token: result.data.token,
                //authenticated: true
            //});

            //axios.defaults.headers.common['Authorization'] = `Bearer ${result.data.token}`;
            // Cambia la manera de almacenar el token
            //await SInfo.setItem(TOKEN_KEY, result.data.token, {});

            //return result;

        //} catch (e) {
          //  return { error: true, msg: e.response?.data?.msg || "Error en inicio de sesión" };
         //};
    //};

    const logout = async () => {
        // Cambia la manera de eliminar el token almacenado
        await SInfo.deleteItem(TOKEN_KEY, {});
=======
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
>>>>>>> cb4f0b4f7e2dab65325df574762a4668ec9e8043
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
<<<<<<< HEAD
        authState: authState,
=======
        authState
>>>>>>> cb4f0b4f7e2dab65325df574762a4668ec9e8043
    };
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
