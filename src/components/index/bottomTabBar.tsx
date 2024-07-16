import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import BottomTabBarItem from './bottomTabBarItem'
import '@/i18n'
import { useTranslation } from 'react-i18next'
import { SafeAreaView } from 'react-native-safe-area-context'
import { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import styleUtils from '@/utils/styleUtils'
import { useTheme } from '@rneui/themed'
import { tabRoutes } from '@/screens/index/tabs/tabRoutes'

const BottomTabBar = ({ navigation }: BottomTabBarProps): React.JSX.Element => {
  const { t } = useTranslation()
  const { theme } = useTheme()

  const [home, settings] = tabRoutes
  const numberOfTabs = tabRoutes.length + 1

  const currentTab = navigation.getState().index

  const handlePressQrButton = () => {
    console.log('pressing qr')
  }

  const styles = StyleSheet.create({
    safeArea: {
      backgroundColor: theme.colors.BACKGROUND,
      shadowColor: 'rgba(0, 0, 0, 1)',
      shadowOffset: { width: 0, height: -4 },
      shadowOpacity: 0.08,
      shadowRadius: 20,
      elevation: 20,
    },
    bar: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'stretch',
      height: styleUtils.getHeight(56),
      backgroundColor: theme.colors.BACKGROUND,
    },
    qrButton: {
      width: styleUtils.getScreenWidth() / numberOfTabs,
      gap: styleUtils.getHeight(4),
      alignItems: 'center',
      justifyContent: 'center',
    },
    qrButtonSpacer: {
      width: styleUtils.getScreenWidth() / numberOfTabs,
      height: styleUtils.getHeight(20),
    },
    qrButtonText: {
      color: theme.colors.DESCRIPTION,
      fontSize: styleUtils.getFontSize(10),
    },
    circleWrap: {
      width: styleUtils.getHeight(60),
      height: styleUtils.getHeight(60),
      borderRadius: styleUtils.getHeight(60) / 2,
      position: 'absolute',
      bottom: -(styleUtils.getHeight(60) - styleUtils.getHeight(46)) / 2,
      backgroundColor: theme.colors.BACKGROUND,
      alignSelf: 'center',
    },
    circleIcon: {
      width: styleUtils.getHeight(46),
      height: styleUtils.getHeight(46),
      borderRadius: styleUtils.getHeight(46) / 2,
      borderColor: theme.colors.MAIN_1,
      borderWidth: styleUtils.getHeight(2),
      position: 'absolute',
      alignSelf: 'center',
      bottom: 0,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.colors.BACKGROUND,
    },
    qrLogo: {
      width: styleUtils.getHeight(18),
      height: styleUtils.getHeight(18),
    },
  })

  return (
    <SafeAreaView edges={['bottom']} style={styles.safeArea}>
      <View style={styles.bar}>
        <BottomTabBarItem
          tab={home}
          active={currentTab === 0}
          title={t('index.home.title')}
          width={styleUtils.getScreenWidth() / numberOfTabs}
        />
        <View style={styles.qrButton}>
          <View style={styles.qrButtonSpacer}>
            <View style={styles.circleWrap} />
            <TouchableOpacity
              style={styles.circleIcon}
              onPress={handlePressQrButton}>
              <Image
                source={require('@/assets/icons/qr.png')}
                width={styleUtils.getHeight(18)}
                height={styleUtils.getHeight(18)}
                style={styles.qrLogo}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={handlePressQrButton}>
            <Text style={styles.qrButtonText}>{t('index.qr')}</Text>
          </TouchableOpacity>
        </View>
        <BottomTabBarItem
          tab={settings}
          active={currentTab === 1}
          title={t('index.settings.title')}
          width={styleUtils.getScreenWidth() / numberOfTabs}
          notificationCount={0}
        />
      </View>
    </SafeAreaView>
  )
}

export default BottomTabBar
