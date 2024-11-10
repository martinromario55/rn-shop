import React from 'react'
import { Stack } from 'expo-router'
import { ToastProvider } from 'react-native-toast-notifications'

const RootLayout = () => {
  return (
    <ToastProvider>
      <Stack>
        <Stack.Screen
          name="(shop)"
          options={{ headerShown: false, title: 'shop' }}
        />

        <Stack.Screen name="categories" options={{ headerShown: false }} />

        <Stack.Screen name="product" options={{ headerShown: false }} />

        <Stack.Screen
          name="cart"
          options={{ presentation: 'modal', title: 'Shopping Cart' }}
        />

        <Stack.Screen name="auth" options={{ headerShown: false }} />
      </Stack>
    </ToastProvider>
  )
}

export default RootLayout
