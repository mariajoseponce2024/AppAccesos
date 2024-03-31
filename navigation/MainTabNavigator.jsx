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