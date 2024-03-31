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

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 20,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
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
