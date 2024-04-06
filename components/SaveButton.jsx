<<<<<<< HEAD
// SaveButton.jsx
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { GlobalStateContext } from '../context/GlobalStateContext';

class SaveButton extends React.Component {
  static contextType = GlobalStateContext;

  render() {
    // Desestructura saveData desde this.context
    const { saveData } = this.context;

    return (
      <TouchableOpacity style={styles.button} onPress={saveData}>
        <Text style={styles.text}>Guardar</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#0094FC',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    width: '50%',
    marginRight: 1,
  },
  text: {
    color: 'white',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
});
=======

import React, { useContext } from 'react';
import { Button } from 'react-native';
import { GlobalStateContext } from '../context/GlobalStateContext';

const SaveButton = () => {
  const { saveData } = useContext(GlobalStateContext);

  return <Button title="Guardar" onPress={saveData} />;
};
>>>>>>> cb4f0b4f7e2dab65325df574762a4668ec9e8043

export default SaveButton;
