import React from 'react'
import Header from '@/components/header/header'
import { Button, StyleSheet, Text, View } from 'react-native'
import toastUtils from '@/utils/toastUtils'
import { ToastType } from '@/components/rootSiblingsLayer/toast/toastTypes'
import { useTheme } from '@rneui/themed'
import styleUtils from '@/utils/styleUtils'

const DialogScreen = () => {
  const { theme } = useTheme()
  const styles = StyleSheet.create({
    section: {
      paddingHorizontal: styleUtils.getWidth(16),
      paddingVertical: styleUtils.getHeight(12),
    },
    title: {
      color: theme.colors.TITLE_1,
      fontSize: styleUtils.getFontSize(20),
      textAlign: 'center',
    },
  })

  return (
    <View>
      <Header title={'Dialog'} />
      <View style={styles.section}>
        <Text style={styles.title}>Toast</Text>
        <Button
          title="Loading Toast"
          onPress={() => {
            toastUtils.insertToast({
              message: 'Loading',
              type: ToastType.LOADING,
            })
          }}
        />
        <Button
          title="Success Toast"
          onPress={() => {
            toastUtils.insertToast({
              message: 'Success',
              type: ToastType.SUCCESS,
            })
          }}
        />
        <Button
          title="Error Toast"
          onPress={() => {
            toastUtils.insertToast({
              message: 'Error',
              type: ToastType.ERROR,
            })
          }}
        />
        <Button
          title="Warning Toast"
          onPress={() => {
            toastUtils.insertToast({
              message: 'Warning',
              type: ToastType.WARNING,
            })
          }}
        />
      </View>
    </View>
  )
}

export default DialogScreen
