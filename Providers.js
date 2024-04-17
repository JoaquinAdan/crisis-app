import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { PaperProvider } from 'react-native-paper'

export default function Providers({ children }) {
  return (
    <PaperProvider>
      <NavigationContainer>{children}</NavigationContainer>
    </PaperProvider>
  )
}
