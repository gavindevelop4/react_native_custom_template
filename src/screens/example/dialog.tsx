import React from 'react'
import Header from '@/components/header/header'
import { Button, View } from 'react-native'
import toastUtils from '@/utils/toastUtils'
import { ToastType } from '@/components/rootSiblingsLayer/toast/toastTypes'

const DialogScreen = () => {
  return (
    <View>
      <Header title={'dialog'} />
      <View>
        <Button
          title="Add Toast"
          onPress={() => {
            toastUtils.insertToast({
              message: 'Testing',
              type: ToastType.LOADING,
            })
          }}
        />
      </View>
    </View>
  )
}

export default DialogScreen
