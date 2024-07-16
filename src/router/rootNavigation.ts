import { NavigationContainerRef } from '@react-navigation/native'
import * as React from 'react'
import { RootStackParamList } from './types'
import Path from './path'

export const navigationRef =
  React.createRef<NavigationContainerRef<RootStackParamList>>()

export function navigate(name: Path, params: any) {
  navigationRef.current?.navigate(name, params)
}
