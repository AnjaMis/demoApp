import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'

import Home from './components/Home'
import AnotherPage from './components/AnotherPage'

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName
            if (route.name === 'Home') {
              iconName = 'md-home'
            } else if (route.name === 'AnotherPage') {
              iconName = 'ios-help'
            }
            return <Ionicons name={iconName} size={size} color={color} />
          },
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="AnotherPage" component={AnotherPage} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
