import React from 'react'
import { useTheme } from '@rneui/themed'
import { View, Text, StyleSheet, StyleProp, ViewStyle } from 'react-native'
import styleUtils from '@/utils/styleUtils'

type BadgeProps = {
  count: number
  stylePosition: StyleProp<ViewStyle>
}

const Badge: React.FC<BadgeProps> = ({ count, stylePosition }) => {
  const { theme } = useTheme()

  if (count <= 0) {
    return null
  }

  const styles = StyleSheet.create({
    badge: {
      backgroundColor: theme.colors.WARNING,
      borderRadius: 30,
      width: styleUtils.getWidth(17),
      height: styleUtils.getHeight(17),
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      color: theme.colors.PRIMARY_TEXT,
      fontSize: styleUtils.getFontSize(14),
      fontWeight: '400',
      textAlign: 'center',
      lineHeight: styleUtils.getHeight(16),
    },
  })

  return (
    <View style={[styles.badge, stylePosition]}>
      <Text style={styles.text}>{count}</Text>
    </View>
  )
}

export default Badge
