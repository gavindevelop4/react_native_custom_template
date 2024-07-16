import Header from '@/components/header/header'
import React from 'react'
import '@/i18n'
import { useTranslation } from 'react-i18next'
import { Text, View } from 'react-native'

const IndexScreen = () => {
  const { t } = useTranslation()

  return (
    <View>
      <Header title={'index'} showBackButton={false} />
      <Text>{t('index.welcome')}</Text>
    </View>
  )
}

export default IndexScreen
