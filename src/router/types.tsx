import Path from './path'

export type RootStackParamList = {
  [Path.index]: undefined

  // index tabs
  [Path.home]: undefined
  [Path.settings]: undefined
}

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
