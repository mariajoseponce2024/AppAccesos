import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Pressable, Alert } from 'react-native';
import { useAuth, AuthProvider } from '../context/AuthContext';


function LoginScreen() {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const { onLogin } = useAuth();


const login = async () => {
  const result = await onLogin(email, password);
  if (result && result.error) {
    Alert.alert(result.msg);
  }
};


  return (
    <View style={styles.container}>
      <Text>¡Bienvenido!</Text>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        keyboardType="email-address" 
        autoCapitalize="none"
      />
      <TextInput
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        style={styles.input}
        secureTextEntry
      />
      <Pressable onPress={login} style={styles.button} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    borderBottomWidth: 1,
    marginBottom: 20,
  },
  button: {
    padding: 10,
    backgroundColor: '#007bff',
    alignItems: 'center',
  },
});

export default LoginScreen;