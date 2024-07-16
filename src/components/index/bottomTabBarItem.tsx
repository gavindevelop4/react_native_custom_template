import styleUtils from '@/utils/styleUtils'
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native'

import { useTheme } from '@rneui/themed'
import { tabRoutes } from '@/screens/index/tabs/tabRoutes'
import Badge from '../badge/badge'
import { ArrayElement } from '@/types/arrayElement'

type Props = {
  tab: ArrayElement<typeof tabRoutes>
  title: string
  active?: boolean
  notificationCount?: number
  width: number
}

const BottomTabBarItem = ({
  tab,
  active,
  notificationCount = 0,
  title,
  width,
}: Props): React.JSX.Element => {
  const navigation = useNavigation()
  const { theme } = useTheme()

  const handlePress = () => {
    navigation.navigate(tab.key)
  }

  const styles = StyleSheet.create({
    item: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: styleUtils.getHeight(4),
      width: width,
    },
    text: {
      color: theme.colors.DESCRIPTION,
      fontSize: styleUtils.getFontSize(10),
    },
    activatedText: {
      color: theme.colors.MAIN_1,
    },
    positionBadge: {
      position: 'absolute',
      right: 20,
      top: 2,
    },
  })

  return (
    <TouchableOpacity onPress={handlePress} style={styles.item}>
      <Image
        source={active ? tab.activated_icon : tab.icon}
        width={styleUtils.getHeight(20)}
        height={styleUtils.getHeight(20)}
      />
      <Badge count={notificationCount} stylePosition={styles.positionBadge} />
      <Text style={[styles.text, active && styles.activatedText]}>{title}</Text>
    </TouchableOpacity>
  )
}

export default BottomTabBarItem
