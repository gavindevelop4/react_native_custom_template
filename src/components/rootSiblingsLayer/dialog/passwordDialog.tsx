import { useTranslation } from 'react-i18next'
import '@/i18n'
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import styleUtils from '@/utils/styleUtils'
import React, { useState } from 'react'
import Animated, {
  FadeIn,
  FadeOut,
  SlideInDown,
  SlideOutDown,
} from 'react-native-reanimated'
import { useTheme } from '@rneui/themed'
import Schema from 'async-validator'
import { DialogConfig } from '../config'

export interface PasswordDialogProps {
  config: DialogConfig
}

export const PasswordDialog = ({
  config,
}: PasswordDialogProps): JSX.Element => {
  const { t } = useTranslation()

  const { theme } = useTheme()

  const { title, onConfirm, onCancel } = config

  const _confirmText = t('common.confirm')
  const _cancelText = t('common.cancel')

  const descriptor = {
    password: {
      type: 'string',
      required: true,
      message: 'password is required',
    },
  } as const

  // const insets = useSafeAreaInsets()
  const styles = StyleSheet.create({
    wrap: {
      flex: 1,
    },
    baseLayer: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 998,
      justifyContent: 'flex-end',
    },
    otherArea: {
      flex: 1,
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: theme.colors.OVERLAY_BACKGROUND,
    },
    container: {
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
      marginBottom: styleUtils.getHeight(14),
    },
    textInput: {
      marginHorizontal: styleUtils.getWidth(25),
      marginBottom: styleUtils.getHeight(28),
      borderColor: theme.colors.BORDER,
      borderWidth: 1,
      paddingHorizontal: styleUtils.getWidth(12),
      paddingVertical: styleUtils.getHeight(12),
    },
    textInputText: {
      fontSize: styleUtils.getFontSize(12),
    },
    confirmButton: {
      height: styleUtils.getHeight(42),
      borderRadius: 30,
      backgroundColor: theme.colors.MAIN_1,
      marginHorizontal: styleUtils.getWidth(25),
      justifyContent: 'center',
      alignItems: 'center',
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
    safeAreaBottom: {
      // height: insets.bottom,
      height: styleUtils.getScreenHeight() * 0.05,
    },
  })

  const [password, setPassword] = useState('')

  const handlePressConfirm = async () => {
    const validator = new Schema(descriptor)
    // Form validation
    validator.validate({ password }).then(() => {
      if (onConfirm) {
        onConfirm(password)
      }
    })
  }

  return (
    <Animated.View entering={FadeIn} exiting={FadeOut} style={styles.baseLayer}>
      <TouchableOpacity onPress={onCancel} style={styles.otherArea} />
      <KeyboardAvoidingView behavior="padding">
        <Animated.View
          entering={SlideInDown}
          exiting={SlideOutDown}
          style={styles.container}>
          {title && <Text style={styles.title}>{title}</Text>}
          <View style={styles.textInput}>
            <TextInput
              style={styles.textInputText}
              value={password}
              onChangeText={setPassword}
              secureTextEntry={true}
            />
          </View>
          <TouchableOpacity
            style={styles.confirmButton}
            onPress={handlePressConfirm}>
            <Text style={styles.confirmButtonTitle}>{_confirmText}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cancelButton} onPress={onCancel}>
            <Text style={styles.cancelButtonText}>{_cancelText}</Text>
          </TouchableOpacity>
          <View style={styles.safeAreaBottom} />
        </Animated.View>
      </KeyboardAvoidingView>
    </Animated.View>
  )
}
