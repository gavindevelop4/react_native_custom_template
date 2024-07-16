import Path from '@/router/path'
import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs'
import HomeTab from './home'
import SettingTab from './settings'

export interface TabConfig {
  key: Path
  component: (...args: any) => React.JSX.Element
  icon: any
  activated_icon: any
  options?: BottomTabNavigationOptions
}

export const tabRoutes = [
  {
    key: Path.home,
    component: HomeTab,
    icon: require('@/assets/icons/home.png'),
    activated_icon: require('@/assets/icons/home_activated.png'),
    options: {
      headerShown: false,
    },
  },
  {
    key: Path.settings,
    component: SettingTab,
    icon: require('@/assets/icons/profile.png'),
    activated_icon: require('@/assets/icons/profile_activated.png'),
    options: {
      headerShown: false,
    },
  },
] as const
