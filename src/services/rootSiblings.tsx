import React from 'react'
import RootSiblings from 'react-native-root-siblings'
import {
  RootSiblingsLayer,
  RootSiblingsLayerInterface,
} from '@/components/rootSiblingsLayer/rootSiblingsLayer'
import { ToastConfig } from '@/components/rootSiblingsLayer/config'

export class _rootSiblingsService {
  private rootSiblingsLayer?: RootSiblingsLayerInterface

  public init() {
    new RootSiblings(
      (
        <RootSiblingsLayer
          onRegister={(rootSiblingsLayer: RootSiblingsLayerInterface) =>
            (this.rootSiblingsLayer = rootSiblingsLayer)
          }
        />
      ),
    )
  }

  public insertToast(config: ToastConfig) {
    this.rootSiblingsLayer?.insertToast(config)
  }
}

export const rootSiblingsService = new _rootSiblingsService()
