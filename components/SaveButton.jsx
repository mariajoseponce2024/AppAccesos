
import React, { useContext } from 'react';
import { Button } from 'react-native';
import { GlobalStateContext } from '../context/GlobalStateContext';

const SaveButton = () => {
  const { saveData } = useContext(GlobalStateContext);

  return <Button title="Guardar" onPress={saveData} />;
};

export default SaveButton;
