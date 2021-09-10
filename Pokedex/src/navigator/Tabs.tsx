import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import { Tab1 } from './Tab1';
import { Tab2Screen } from './Tab2Screen';

const Tab = createBottomTabNavigator();

export const Tabs = () => {
  return(
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#5856D5',
            tabBarStyle: { 
                position: 'absolute',
                backgroundColor: 'rgba(255,255,255,0.82)', 
                paddingBottom: 10,
                borderWidth: 0,
                elevation: 0,
                height: 60
            }
      }}
      sceneContainerStyle={{
        backgroundColor: 'white'
      }}
    >
      <Tab.Screen 
        name="HomeScreen" 
        component={Tab1} 
        options={{
          tabBarLabel: "Listado",
          tabBarIcon: ({ color }) => (
            <Icon 
              color={ color } 
              size={ 20 } 
              name="list-outline"
            />
          )
        }}
      />

      <Tab.Screen 
        name="SearchScreen" 
        component={Tab2Screen} 
        options={{
          tabBarLabel: "Busqueda",
          tabBarIcon: ({ color }) => (
            <Icon 
              color={ color } 
              size={ 20 } 
              name="search-outline"
            />
          )
        }}
      />      
    </Tab.Navigator>
  )
}