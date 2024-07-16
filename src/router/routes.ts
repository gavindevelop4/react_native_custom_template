import { NativeStackNavigationOptions } from '@react-navigation/native-stack'
import Path from './path'
import IndexScreen from '@/screens/index'
import DialogScreen from '@/screens/example/dialog'
import CacheScreen from '@/screens/example/cache'

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
  {
    key: Path.dialog,
    component: DialogScreen,
    options: { headerShown: false },
  },
  {
    key: Path.cache,
    component: CacheScreen,
    options: { headerShown: false },
  },
]
