import { useNavigation } from '@react-navigation/native'
import React from 'react'
import {
  GestureResponderEvent,
  StatusBar,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import BackIcon from '@/assets/icons/back.svg'
import styleUtils from '@/utils/styleUtils'
import { useTheme } from '@rneui/themed'

interface Props {
  title: string
  showBackButton?: boolean
  showActionButton?: boolean
  actionButton?: React.JSX.Element
  actionCallback?: (event: GestureResponderEvent) => void
  style?: StyleProp<ViewStyle>
  textStyle?: StyleProp<TextStyle>
}

const Header = ({
  title,
  showBackButton = true,
  actionButton,
  style = undefined,
  textStyle = undefined,
  actionCallback,
}: Props) => {
  const navigation = useNavigation()

  const barStyle = 'dark-content'

  const { theme } = useTheme()

  const styles = StyleSheet.create({
    safeArea: {
      backgroundColor: theme.colors.MAIN_1,
    },
    header: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: theme.colors.MAIN_1,
    },
    backButtonWrap: {
      width: styleUtils.getWidth(48),
      height: styleUtils.getHeight(48),
    },
    backButton: {
      paddingVertical: styleUtils.getHeight(16),
      paddingHorizontal: styleUtils.getWidth(16),
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      color: theme.colors.HEADER,
      fontSize: styleUtils.getFontSize(17),
      fontWeight: '500',
      flex: 1,
      textAlign: 'center',
    },
    action: {
      paddingVertical: styleUtils.getHeight(16),
      paddingHorizontal: styleUtils.getWidth(16),
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: styleUtils.getWidth(16 + 16 * 2),
      height: styleUtils.getHeight(16 + 16 * 2),
    },
    actionButton: {
      width: styleUtils.getWidth(16),
      height: styleUtils.getHeight(16),
    },
  })

  const handleBack = () => {
    navigation.goBack()
  }

  return (
    <SafeAreaView edges={['top']} style={styles.safeArea}>
      <StatusBar
        barStyle={barStyle}
        translucent
        backgroundColor="transparent"
      />
      <View style={[styles.header, style]}>
        <View style={styles.backButtonWrap}>
          {showBackButton && navigation.canGoBack() && (
            <TouchableOpacity
              activeOpacity={1}
              onPress={handleBack}
              style={styles.backButton}>
              <BackIcon
                width={styleUtils.getWidth(16)}
                height={styleUtils.getHeight(16)}
                stroke={theme.colors.HEADER}
                strokeWidth={1.5}
              />
            </TouchableOpacity>
          )}
        </View>
        <Text style={[styles.title, textStyle]}>{title}</Text>
        <TouchableOpacity style={styles.action} onPress={actionCallback}>
          {actionButton}
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default Header
