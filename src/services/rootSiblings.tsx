import React from 'react'
import RootSiblings from 'react-native-root-siblings'
import {
  RootSiblingsLayer,
  RootSiblingsLayerInterface,
} from '@/components/rootSiblingsLayer/rootSiblingsLayer'
import {
  DialogConfig,
  ToastConfig,
} from '@/components/rootSiblingsLayer/config'

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

  public insertAlertDialog(config: DialogConfig) {
    return this.rootSiblingsLayer?.insertAlertDialog(config)
  }

  public insertActionDialog(config: DialogConfig) {
    return this.rootSiblingsLayer?.insertActionDialog(config)
  }

  public insertPasswordDialog(config: DialogConfig) {
    return this.rootSiblingsLayer?.insertPasswordDialog(config)
  }
}

export const rootSiblingsService = new _rootSiblingsService()
