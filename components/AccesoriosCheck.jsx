<<<<<<< HEAD
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { GlobalStateContext } from '../context/GlobalStateContext';

import CustomCheckBox from './CustomCheckBox';

class AccesoriosCheckScreen extends React.Component {
  static contextType = GlobalStateContext;

  render() {
    const { neumaticos, matafuego, toggleNeumaticos, toggleMatafuego } = this.context;

    return (
      <View style={styles.container}>
        <CustomCheckBox
          icon={require('../assets/neumaticos.png')}
          title=""
          checked={neumaticos}
          onChecked={toggleNeumaticos}
        />
        <CustomCheckBox
          icon={require('../assets/matafuego.png')} // Asegúrate de tener este asset.
          title=""
          checked={matafuego}
          onChecked={toggleMatafuego}
        />
      </View>
    );
  }
}
=======
import React, { useState } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { CheckBox } from 'react-native-elements'; // Importa CheckBox de react-native-elements

const CustomCheckbox = ({ icon, title, checked, onChecked }) => {
  return (
    <View style={styles.checkboxContainer}>
      <Image source={icon} style={styles.icon} />
      <CheckBox
        title={title}
        checked={checked}
        onPress={onChecked}
        containerStyle={styles.checkbox}
        checkedColor="green"
      />
    </View>
  );
};

const VehicleCheckScreen = () => {
  const [hasFireExtinguisher, setHasFireExtinguisher] = useState(false);
  const [hasTyres, setHasTyres] = useState(false);

  return (
    <View style={styles.container}>
      <CustomCheckbox
        icon={require('../assets/neumaticos.png')} // Reemplaza con la ruta de tu ícono de neumáticos
        title="Neumáticos"
        checked={hasTyres}
        onChecked={() => setHasTyres(!hasTyres)}
      />
      <CustomCheckbox
        icon={require('../assets/neumaticos.png')} // Reemplaza con la ruta de tu ícono de matafuegos
        title="Matafuego"
        checked={hasFireExtinguisher}
        onChecked={() => setHasFireExtinguisher(!hasFireExtinguisher)}
      />
    </View>
  );
};
>>>>>>> cb4f0b4f7e2dab65325df574762a4668ec9e8043

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
<<<<<<< HEAD
    justifyContent: 'space-between',
=======
    justifyContent: 'space-around',
>>>>>>> cb4f0b4f7e2dab65325df574762a4668ec9e8043
    alignItems: 'center',
    padding: 20,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
<<<<<<< HEAD
    marginLeft: 0,
    padding: 0,
  },
  icon: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
});

export default AccesoriosCheckScreen;
=======
    marginLeft: 0, // Elimina el margen por defecto
    padding: 0, // Elimina el relleno por defecto
  },
  icon: {
    width: 50, // Ajusta según el tamaño deseado
    height: 50, // Ajusta según el tamaño deseado
    marginRight: 10, // Espacio entre el ícono y el checkbox
  },
  // Añade más estilos según sea necesario
});

export default VehicleCheckScreen;
>>>>>>> cb4f0b4f7e2dab65325df574762a4668ec9e8043
