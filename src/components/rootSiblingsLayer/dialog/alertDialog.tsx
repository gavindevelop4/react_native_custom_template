import React from 'react'
import Animated, {
  FadeIn,
  FadeOut,
  ZoomIn,
  ZoomOut,
} from 'react-native-reanimated'
import styleUtils from '@/utils/styleUtils'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import { DialogConfig } from '../config'
import { useTranslation } from 'react-i18next'
import '@/i18n'

export interface AlertDialogProp {
  config: DialogConfig
}

export const AlertDialog = ({ config }: AlertDialogProp): JSX.Element => {
  const { t } = useTranslation()
  const _confirmText = t('common.confirm')
  const _cancelText = t('common.cancel')

  const {
    title,
    content,
    onCancel,
    onConfirm,
    width = styleUtils.getScreenWidth() / 2,
    hideCancel = false,
  } = config
  const styles = StyleSheet.create({
    background: {
      paddingHorizontal: styleUtils.getWidth(40),
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: styleUtils.hexToRgba('#000000', 0.5),
    },
    container: {
      paddingVertical: styleUtils.getHeight(22),
      paddingHorizontal: styleUtils.getWidth(16),
      borderRadius: styleUtils.getWidth(8),
      backgroundColor: '#FFFFFF',
      width: width,
    },
    title: {
      fontSize: styleUtils.getFontSize(13),
      fontWeight: 'bold',
      color: '#0A2757',
    },
    content: {
      marginTop: styleUtils.getHeight(12),
      fontSize: styleUtils.getFontSize(12),
      color: '#6B809F',
    },
    buttonWrap: { marginTop: styleUtils.getHeight(24), flexDirection: 'row' },
    confirmButton: {
      height: styleUtils.getHeight(34),
      borderRadius: 30,
      backgroundColor: '#1B5CDC',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    confirmButtonTitle: { color: '#FFFFFF' },
    cancelButton: {
      height: styleUtils.getHeight(34),
      borderRadius: 30,
      backgroundColor: '#FFFFFF',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    cancelButtonTitle: { color: '#1B5CDC' },
  })

  return (
    <Animated.View
      entering={FadeIn}
      exiting={FadeOut}
      style={[StyleSheet.absoluteFill, styles.background]}>
      <Animated.View
        entering={ZoomIn}
        exiting={ZoomOut}
        style={styles.container}>
        {title && <Text style={styles.title}>{title}</Text>}
        {content && <Text style={styles.content}>{content}</Text>}
        <View style={styles.buttonWrap}>
          <TouchableOpacity
            style={styles.confirmButton}
            onPress={() => {
              if (onConfirm) {
                onConfirm()
              }
            }}>
            <Text style={styles.confirmButtonTitle}>{_confirmText}</Text>
          </TouchableOpacity>
          {!hideCancel && (
            <TouchableOpacity style={styles.cancelButton} onPress={onCancel}>
              <Text style={styles.cancelButtonTitle}>{_cancelText}</Text>
            </TouchableOpacity>
          )}
        </View>
      </Animated.View>
    </Animated.View>
  )
}
