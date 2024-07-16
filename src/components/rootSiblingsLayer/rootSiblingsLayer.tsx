import React, { useRef } from 'react'
import {
  registerComponent,
  RegisterProps,
} from '@/hooks/registerComponentHooks'
import { Platform, StyleSheet, View } from 'react-native'
import useToast from './toast/toastLogic'
import { ToastConfig } from './config'
import useDialog from './dialog/dialogLogic'
import { SafeAreaView } from 'react-native-safe-area-context'
import styleUtils from '@/utils/styleUtils'
import Toast from './toast/toast'

export interface RootSiblingsLayerInterface {
  insertToast: (config: ToastConfig) => void
}

interface RootSiblingsLayerProps
  extends RegisterProps<RootSiblingsLayerInterface> {}

export const RootSiblingsLayer = registerComponent<
  RootSiblingsLayerInterface,
  RootSiblingsLayerProps
>((props: RootSiblingsLayerProps) => {
  const { dialogList } = useDialog()
  const { toastList, insertToast } = useToast()

  const instance: RootSiblingsLayerInterface = useRef({
    insertToast,
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
