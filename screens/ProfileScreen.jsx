// Importaciones necesarias
import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { useAuth } from '../context/AuthContext'; // Asegúrate de tener la ruta correcta

const ProfileScreen = () => {
  const { logout } = useAuth();

  return (
    <View style={styles.container}>
      {/* Otros componentes de configuración */}

      {/* Botón para cerrar sesión */}
      <Button title="Cerrar Sesión" onPress={logout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  // Puedes agregar más estilos aquí si lo necesitas
});

export default ProfileScreen;