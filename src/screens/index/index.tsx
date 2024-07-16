import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { tabRoutes } from './tabs/tabRoutes'
import BottomTabBar from '@/components/index/bottomTabBar'

const Tab = createBottomTabNavigator()

const IndexScreen = () => {
  return (
    // eslint-disable-next-line react/no-unstable-nested-components
    <Tab.Navigator tabBar={props => <BottomTabBar {...props} />}>
      {tabRoutes.map(tab => {
        return (
          <Tab.Screen
            key={tab.key}
            name={tab.key}
            component={tab.component}
            options={tab.options}
          />
        )
      })}
    </Tab.Navigator>
  )
}

export default IndexScreen
