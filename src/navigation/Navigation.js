import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { Image } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import Form from '../screens/Form'
import Map from '../screens/Map'

const Tab = createBottomTabNavigator()

export default function Navigation() {
  return (
    <Tab.Navigator initialRouteName='Form'>
      <Tab.Screen
        name='Form'
        component={Form}
        options={{
          headerShown: false,
          tabBarLabel: 'Formulario',
          tabBarIcon: ({ color, size }) => <Icon name='heart' color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name='Map'
        component={Map}
        options={{
          headerShown: false,
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => <Icon name='map' color={color} size={size} />,
        }}
      />
    </Tab.Navigator>
  )
}
