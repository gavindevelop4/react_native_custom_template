import React from 'react'
import '@/i18n'
import { useTranslation } from 'react-i18next'
import Header from '@/components/header/header'
import { View } from 'react-native'

const HomeTab = () => {
  const { t } = useTranslation()
  return (
    <View>
      <Header title={t('index.home.title')} showBackButton={false} />
    </View>
  )
}

export default HomeTab
