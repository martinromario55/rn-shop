import React from 'react'
import { Stack } from 'expo-router'
import { ToastProvider } from 'react-native-toast-notifications'
import AuthProvider from '../providers/auth-provider'
import QueryProvider from '../providers/query-proviter'

const RootLayout = () => {
  return (
    <ToastProvider>
      <AuthProvider>
        <QueryProvider>
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
        </QueryProvider>
      </AuthProvider>
    </ToastProvider>
  )
}

export default RootLayout
