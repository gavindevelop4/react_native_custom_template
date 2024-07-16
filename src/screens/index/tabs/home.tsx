import React from 'react'
import '@/i18n'
import { useTranslation } from 'react-i18next'
import Header from '@/components/header/header'
import { View } from 'react-native'
import { Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Path from '@/router/path'

const HomeTab = () => {
  const { t } = useTranslation()
  const navigation = useNavigation()

  return (
    <View>
      <Header title={t('index.home.title')} showBackButton={false} />
      <View>
        <Button
          title="Dialog"
          onPress={() => {
            navigation.navigate(Path.dialog)
          }}
        />
      </View>
    </View>
  )
}

export default HomeTab
