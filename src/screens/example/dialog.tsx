import React from 'react'
import Header from '@/components/header/header'
import { Button, StyleSheet, Text, View } from 'react-native'
import { ToastType } from '@/components/rootSiblingsLayer/toast/toastTypes'
import { useTheme } from '@rneui/themed'
import styleUtils from '@/utils/styleUtils'
import modalUtils from '@/utils/modalUtils'
import { DialogType } from '@/components/rootSiblingsLayer/dialog/dialogTypes'

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
            modalUtils.toast({
              message: 'Loading',
              type: ToastType.LOADING,
            })
          }}
        />
        <Button
          title="Success Toast"
          onPress={() => {
            modalUtils.toast({
              message: 'Success',
              type: ToastType.SUCCESS,
            })
          }}
        />
        <Button
          title="Error Toast"
          onPress={() => {
            modalUtils.toast({
              message: 'Error',
              type: ToastType.ERROR,
            })
          }}
        />
        <Button
          title="Warning Toast"
          onPress={() => {
            modalUtils.toast({
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
            const result = await modalUtils.dialog({
              title: 'Alert',
              content: 'Testing',
              width: 300,
              dialogType: DialogType.ALERT_DIALOG,
            })
            console.log(result)
          }}
        />
        <Button
          title="Action Dialog"
          onPress={async () => {
            const result = await modalUtils.dialog({
              title: 'Action',
              content: 'Testing',
              dialogType: DialogType.ACTION_DIALOG,
            })
            console.log(result)
          }}
        />
        <Button
          title="Password Dialog"
          onPress={async () => {
            const result = await modalUtils.dialog({
              title: 'Password',
              content: 'Testing',
              dialogType: DialogType.PASSWORD_DIALOG,
            })
            console.log(result)
          }}
        />
      </View>
    </View>
  )
}

export default DialogScreen
