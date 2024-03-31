import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import { CheckBox } from 'react-native-elements';
import * as ImagePicker from 'expo-image-picker';

const VehicleQRScanner = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [image, setImage] = useState(null);

  const handleImageSelection = async (type) => {
    let result;
    if (type === 'library') {
      const { status } = await ImagePicker.getMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        alert('Sorry, we need media library permissions to make this work!');
        return;
      }
      result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
    } else if (type === 'camera') {
      const { status } = await ImagePicker.getCameraPermissionsAsync();
      if (status !== 'granted') {
        alert('Sorry, we need camera permissions to make this work!');
        return;
      }
      result = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
    }

    if (!result.cancelled) {
      setImage(result.uri);
      setIsChecked(true);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text>Scanner QR Vehículo</Text>
        <CheckBox
          center
          title=""
          checked={isChecked}
          onPress={() => setIsChecked(!isChecked)}
          containerStyle={styles.checkbox}
        />
      </View>

      <View style={styles.row}>
        <Button title="Agregar Imagen" onPress={() => handleImageSelection('library')} />
        <Button title="Tomar Foto" onPress={() => handleImageSelection('camera')} />
      </View>

    
      {image && (
    <View style={styles.imageContainer}>
      <Image source={{ uri: image }} style={styles.image} />
    </View>
      )}
  </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%', // Asegura que los elementos hijos (botones y checkbox) se distribuyan a lo largo del ancho del contenedor
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
    marginVertical: 10,
  },
  checkbox: {
    marginVertical: 10,
    marginLeft: 10, // Añade un poco de margen para separar el texto del checkbox
  },
});

export default VehicleQRScanner;