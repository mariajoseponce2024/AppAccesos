<<<<<<< HEAD
// AppNavigator.jsx
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';

// Importa tus pantallas aquí
import ProfileScreen from '../screens/ProfileScreen';
import HistoryIncidentScreen from '../screens/HistoryIncidentScreen';
import HistoryRegisterScreen from '../screens/HistoryRegisterScreen';
import SettingsScreen from '../screens/SettingsScreen';
import NewRegisterScreen from '../screens/RegisterScreen';
import IncidentScreen from '../screens/IncidentScreen';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();



function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          switch (route.name) {
            case 'NewRegister':
              iconName = focused ? 'plus-circle' : 'plus-circle-outline';
              break;
            case 'Incident':
              iconName = focused ? 'exclamation-circle' : 'exclamation-circle-outline';
              break;
          }
          return <Icon name={iconName} type="font-awesome" size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Nuevo Ingreso" component={NewRegisterScreen} />
      <Tab.Screen name="Nuevo Incidente" component={IncidentScreen} />
    </Tab.Navigator>
  );
}

function ContainerScreen() {
  return (
    <BottomTabs />
  );
}

// El Drawer Navigator tendrá como pantalla principal la ContainerScreen que incluye los Bottom Tabs
function AppNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Registros" component={ContainerScreen} />
      <Drawer.Screen name="Mi Perfil" component={ProfileScreen} />
      <Drawer.Screen name="Historial de Incidentes" component={HistoryIncidentScreen} />
      <Drawer.Screen name="Historial de Registros" component={HistoryRegisterScreen} />
      <Drawer.Screen name="Configuración" component={SettingsScreen} />
      {/* Agrega aquí más pantallas si es necesario */}
    </Drawer.Navigator>
  );
}

export default AppNavigator;

{/*function DrawerContent() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Mi Perfil" component={ProfileScreen} />
      <Drawer.Screen name="Historial de Incidentes" component={HistoryIncidentScreen} />
      <Drawer.Screen name="Historial de Registros" component={HistoryRegisterScreen} />
      <Drawer.Screen name="Configuración" component={SettingsScreen} />
    </Drawer.Navigator>
  );
}

function MainTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'settings' : 'settings-outline';
          }
          // Puedes retornar cualquier componente aquí, no tiene que ser un Icon
          return <Icon name={iconName} size={size} color={color} />;
        },
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={DrawerContent} />
      <Tab.Screen name="NewRegister" component={NewRegisterScreen} />
      <Tab.Screen name="Incident" component={IncidentScreen} />
    </Tab.Navigator>
  );
}

export default MainTabNavigator;*/}
=======
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';

import ProfileScreen from '../screens/ProfileScreen';
import HistoryScreen from '../screens/HistoryScreen';
import NewIncidentScreen from '../screens/NewIncidentScreen';
import NewRegisterScreen from '../screens/NewRegisterScreen';
import SettingsScreen from '../screens/SettingsScreen';

const Tab = createBottomTabNavigator();

export default function MainTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'NewRegister') {
            iconName = 'plus-circle';
          } else if (route.name === 'Settings') {
            iconName = 'cog';
          } else if (route.name === 'Profile') {
            iconName = 'user';
          } else if (route.name === 'History') {
            iconName = 'history';
          } else if (route.name === 'NewIncident') {
            iconName = 'exclamation-circle';
          } 

          return <Icon name={iconName} type="font-awesome" size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'blue',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="History" component={HistoryScreen} />
      <Tab.Screen name="NewIncident" component={NewIncidentScreen} />
      <Tab.Screen name="NewRegister" component={NewRegisterScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}
>>>>>>> cb4f0b4f7e2dab65325df574762a4668ec9e8043
