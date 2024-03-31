// GlobalStateContext.js
import React, { createContext, useState } from 'react';

export const GlobalStateContext = createContext({});

export const GlobalStateProvider = ({ children }) => {
  const [globalState, setGlobalState] = useState({
    entrance: true,
    vehicleQR: '',
    personalQR: '',
    neumaticos: false,
    matafuego: false,
    remito: {
      checked: false,
      number: '',
      imageUri: ''
    }
    
  });

  const saveData = () => {
    // Aquí manejas la lógica para guardar los datos, por ejemplo, enviarlos a una API
    console.log('Datos a guardar:', globalState);
    // axios.post('tuAPI', globalState)...
  };

  return (
    <GlobalStateContext.Provider value={{ globalState, setGlobalState, saveData }}>
      {children}
    </GlobalStateContext.Provider>
  );
};
