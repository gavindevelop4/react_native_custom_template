import { useTranslation } from 'react-i18next'
import '@/i18n'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import styleUtils from '@/utils/styleUtils'
import React from 'react'
import Animated, {
  FadeIn,
  FadeOut,
  SlideInDown,
  SlideOutDown,
} from 'react-native-reanimated'
import { useTheme } from '@rneui/themed'
import { DialogConfig } from '../config'

export interface ActionDialogProps {
  config: DialogConfig
}

export const ActionDialog = ({ config }: ActionDialogProps): JSX.Element => {
  const { t } = useTranslation()

  const { theme } = useTheme()

  const { title, onCancel, onConfirm } = config

  const _confirmText = t('common.confirm')
  const _cancelText = t('common.cancel')

  const styles = StyleSheet.create({
    baseLayer: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      justifyContent: 'flex-end',
      backgroundColor: theme.colors.OVERLAY_BACKGROUND,
    },
    otherArea: {
      flex: 1,
    },
    container: {
      height: styleUtils.getHeight(216),
      width: styleUtils.getScreenWidth(),
      backgroundColor: theme.colors.BACKGROUND,
      borderTopLeftRadius: styleUtils.getWidth(8),
      borderTopRightRadius: styleUtils.getWidth(8),
    },
    title: {
      color: theme.colors.TITLE_1,
      fontSize: styleUtils.getFontSize(16),
      fontWeight: 'bold',
      marginHorizontal: styleUtils.getWidth(25),
      marginTop: styleUtils.getHeight(24),
      marginBottom: styleUtils.getHeight(28),
    },
    confirmButton: {
      height: styleUtils.getHeight(42),
      borderRadius: 30,
      backgroundColor: theme.colors.MAIN_1,
      marginHorizontal: styleUtils.getWidth(25),
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    confirmButtonTitle: {
      fontSize: styleUtils.getHeight(15),
      color: theme.colors.PRIMARY_TEXT,
    },
    cancelButton: {
      marginTop: styleUtils.getHeight(28),
      display: 'flex',
      alignItems: 'center',
    },
    cancelButtonText: {
      color: theme.colors.CANCEL_TEXT,
      fontWeight: 'bold',
    },
  })

  return (
    <Animated.View entering={FadeIn} exiting={FadeOut} style={styles.baseLayer}>
      <TouchableOpacity onPress={onCancel} style={styles.otherArea} />
      <Animated.View
        entering={SlideInDown}
        exiting={SlideOutDown}
        style={styles.container}>
        {title && <Text style={styles.title}>{title}</Text>}
        <TouchableOpacity
          style={styles.confirmButton}
          onPress={() => {
            if (onConfirm) {
              onConfirm()
            }
          }}>
          <Text style={styles.confirmButtonTitle}>{_confirmText}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cancelButton} onPress={onCancel}>
          <Text style={styles.cancelButtonText}>{_cancelText}</Text>
        </TouchableOpacity>
      </Animated.View>
    </Animated.View>
  )
}
