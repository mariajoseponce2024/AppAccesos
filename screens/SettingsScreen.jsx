import React from 'react';
<<<<<<< HEAD
import { View, Text } from 'react-native';

const SettingsScreen = () => {
  return (
    <View>
      <Text>Configuraciones</Text>
    </View>
  );
};

export default SettingsScreen;
=======
import { View, Text, StyleSheet } from 'react-native';

function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Text>Settings Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {

  },
 
});

export default SettingsScreen;
>>>>>>> cb4f0b4f7e2dab65325df574762a4668ec9e8043
