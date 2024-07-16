import React, { useRef } from 'react'
import {
  registerComponent,
  RegisterProps,
} from '@/hooks/registerComponentHooks'
import { StyleSheet, View } from 'react-native'
import useToast from './toast/toastLogic'
import { DialogConfig, ToastConfig } from './config'
import useDialog from './dialog/dialogLogic'
import { SafeAreaView } from 'react-native-safe-area-context'
import styleUtils from '@/utils/styleUtils'
import Toast from './toast/toast'
import { DialogRenderMap } from './dialog/dialogRenderMap'
import { DialogResult } from './dialog/dialogResult'

export interface RootSiblingsLayerInterface {
  insertToast: (config: ToastConfig) => void
  insertAlertDialog: (config: DialogConfig) => Promise<DialogResult>
  insertActionDialog: (config: DialogConfig) => Promise<DialogResult>
  insertPasswordDialog: (config: DialogConfig) => Promise<DialogResult>
  hideDialog: (id: string) => void
}

interface RootSiblingsLayerProps
  extends RegisterProps<RootSiblingsLayerInterface> {}

export const RootSiblingsLayer = registerComponent<
  RootSiblingsLayerInterface,
  RootSiblingsLayerProps
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
>((props: RootSiblingsLayerProps) => {
  const {
    dialogList,
    insertAlertDialog,
    insertActionDialog,
    insertPasswordDialog,
    hideDialog,
  } = useDialog()
  const { toastList, insertToast } = useToast()

  const instance: RootSiblingsLayerInterface = useRef({
    insertToast,
    insertAlertDialog,
    insertActionDialog,
    insertPasswordDialog,
    hideDialog,
  }).current

  const styles = StyleSheet.create({
    wrap: {
      flex: 1,
      zIndex: 999,
    },
    notificationWrap: {
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center',
      rowGap: styleUtils.getHeight(12),
      paddingHorizontal: styleUtils.getWidth(15),
      overflow: 'hidden',
    },
    toastWrap: {
      justifyContent: 'center',
      alignItems: 'center',
      rowGap: styleUtils.getHeight(26),
      paddingHorizontal: styleUtils.getWidth(32),
    },
  })

  return {
    element: (
      <View
        pointerEvents="box-none"
        style={[StyleSheet.absoluteFill, styles.wrap]}>
        {dialogList.map((item, index) => {
          return DialogRenderMap[item.dialogType!].render(index, item)
        })}

        <SafeAreaView
          pointerEvents="none"
          edges={['bottom']}
          style={[StyleSheet.absoluteFill, styles.toastWrap]}>
          {toastList.map((item, index) => (
            <Toast key={index} message={item.message} type={item.type} />
          ))}
        </SafeAreaView>
      </View>
    ),
    instance,
  }
})
