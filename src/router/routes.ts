import { NativeStackNavigationOptions } from '@react-navigation/native-stack'
import Path from './path'
import IndexScreen from '@/screens/index'

export interface RouteConfig {
  key: Path
  component: (...args: any) => React.JSX.Element
  options?: NativeStackNavigationOptions
}

export const baseRoutes: Array<RouteConfig> = [
  {
    key: Path.index,
    component: IndexScreen,
    options: { headerShown: false },
  },
]
