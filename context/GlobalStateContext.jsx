<<<<<<< HEAD
=======
// GlobalStateContext.js
>>>>>>> cb4f0b4f7e2dab65325df574762a4668ec9e8043
import React, { createContext, useState } from 'react';

export const GlobalStateContext = createContext({});

<<<<<<< HEAD

//estdos iniciales
export const GlobalStateProvider = ({ children }) => {
  const initialState = {
    entrance: true,
    vehicleQR: '',
    vehicleQRChecked: false,
    personalQR: '',
    personalQRChecked: false,
=======
export const GlobalStateProvider = ({ children }) => {
  const [globalState, setGlobalState] = useState({
    entrance: true,
    vehicleQR: '',
    personalQR: '',
>>>>>>> cb4f0b4f7e2dab65325df574762a4668ec9e8043
    neumaticos: false,
    matafuego: false,
    remito: {
      checked: false,
      number: '',
      imageUri: ''
<<<<<<< HEAD
    },
    incident: {
      imageUri: '',
    },
    
  };

  const [globalState, setGlobalState] = useState(initialState);


  //estado entrada
  const setEntrance = (isEntrance) => {
    setGlobalState(prevState => ({
      ...prevState,
      entrance: isEntrance
    }));
  };


//personal
  const togglePersonalQRChecked = () => {
    setGlobalState(prevState => ({
      ...prevState,
      personalQRChecked: !prevState.personalQRChecked
    }));
  };


  const clearPersonalQR = () => {
    setGlobalState(prevState => ({
      ...prevState,
      personalQR: '',
      // Aquí puedes añadir más lógica si necesitas resetear más estados asociados
    }));
  };

  //vehiculo
  const toggleVehicleQRChecked = () => {
    setGlobalState(prevState => ({
      ...prevState,
      vehicleQRChecked: !prevState.vehicleQRChecked
    }));
  };


  const clearVehicleQR = () => {
    setGlobalState(prevState => ({
      ...prevState,
      vehicleQR: '',
      // Aquí puedes añadir más lógica si necesitas resetear más estados asociados
    }));
  };

  const toggleNeumaticos = () => {
    setGlobalState(prevState => ({ ...prevState, neumaticos: !prevState.neumaticos }));
  };

  const toggleMatafuego = () => {
    setGlobalState(prevState => ({ ...prevState, matafuego: !prevState.matafuego }));
  };

  const saveData = () => {
   
    console.log('Datos a guardar:', globalState);
    // axios.post('API', globalState)...
  };

  const resetData = () => {
    setGlobalState(initialState);
  };

   // Función para cambiar el estado del checkbox del remito.
   const toggleRemitoChecked = () => {
    setGlobalState(prevState => ({
      ...prevState,
      remito: {
        ...prevState.remito,
        checked: !prevState.remito.checked
      }
    }));
  };

   // Función para establecer el número del remito.
   const setRemitoNumber = (number) => {
    setGlobalState(prevState => ({
      ...prevState,
      remito: {
        ...prevState.remito,
        number: number
      }
    }));
  };

  // Función para actualizar la ruta de la imagen del remito.
  const setRemitoImageUri = (uri) => {
    setGlobalState(prevState => ({
      ...prevState,
      remito: {
        ...prevState.remito,
        imageUri: uri
      }
    }));
  };

  const setIncidentImageUri = (uri) => {
    setGlobalState(prevState => ({
      ...prevState,
      incident: {
        ...prevState.incident,
        imageUri: uri
      }
    }));
  };



  
  return (
    <GlobalStateContext.Provider value={{ 
      ...globalState, 
      setGlobalState,
      setEntrance,
      togglePersonalQRChecked,
      clearPersonalQR,
      toggleVehicleQRChecked,
      clearVehicleQR,
      toggleNeumaticos, 
      toggleMatafuego, 
      toggleRemitoChecked,
      setRemitoNumber,
      setRemitoImageUri,
      setIncidentImageUri,
      saveData, 
      resetData 
    }}>
      {children}
    </GlobalStateContext.Provider>
  );
};
=======
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
>>>>>>> cb4f0b4f7e2dab65325df574762a4668ec9e8043
