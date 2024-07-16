import React from 'react'
import Header from '@/components/header/header'
import { Button, StyleSheet, Text, View } from 'react-native'
import toastUtils from '@/utils/toastUtils'
import { ToastType } from '@/components/rootSiblingsLayer/toast/toastTypes'
import { useTheme } from '@rneui/themed'
import styleUtils from '@/utils/styleUtils'
import dialogUtils from '@/utils/dialogUtils'

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
      <View style={styles.section}>
        <Text style={styles.title}>Dialog</Text>
        <Button
          title="Alert Dialog, width: 300"
          onPress={async () => {
            const result = await dialogUtils.alertDialog({
              title: 'Alert',
              content: 'Testing',
              width: 300,
            })
            console.log(result)
          }}
        />
        <Button
          title="Action Dialog"
          onPress={async () => {
            const result = await dialogUtils.actionDialog({
              title: 'Action',
              content: 'Testing',
            })
            console.log(result)
          }}
        />
        <Button
          title="Password Dialog"
          onPress={async () => {
            const result = await dialogUtils.passwordDialog({
              title: 'Password',
              content: 'Testing',
            })
            console.log(result)
          }}
        />
      </View>
    </View>
  )
}

export default DialogScreen
