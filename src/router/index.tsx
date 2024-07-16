import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { baseRoutes } from './routes'
import { navigationRef } from './rootNavigation'
import { NavigationContainer } from '@react-navigation/native'

const Stack = createNativeStackNavigator()

const Router = (): React.JSX.Element => {
  const routes = baseRoutes

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        {routes.map(route => {
          return (
            <Stack.Screen
              key={route.key}
              name={route.key}
              component={route.component}
              options={{
                headerShown: false,
                ...route.options,
              }}
            />
          )
        })}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Router
