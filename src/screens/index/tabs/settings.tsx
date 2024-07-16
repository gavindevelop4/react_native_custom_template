import React from 'react'
import '@/i18n'
import { useTranslation } from 'react-i18next'
import Header from '@/components/header/header'
import { View } from 'react-native'

const SettingTab = () => {
  const { t } = useTranslation()
  return (
    <View>
      <Header title={t('index.settings.title')} showBackButton={false} />
    </View>
  )
}

export default SettingTab
