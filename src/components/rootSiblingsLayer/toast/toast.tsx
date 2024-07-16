import React, { useEffect } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { ToastConfig } from '../config'
import Animated, {
  FadeInDown,
  FadeOutUp,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated'
import styleUtils from '@/utils/styleUtils'
import { ToastType } from './toastTypes'

const Toast = (config: ToastConfig): React.JSX.Element => {
  const rotation = useSharedValue(0)

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ rotateZ: `${rotation.value}deg` }],
    }
  })

  useEffect(() => {
    if (config.type === ToastType.LOADING) {
      rotation.value = withRepeat(
        withTiming(360, { duration: 3000 }),
        2000,
        false,
      )
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Animated.View entering={FadeInDown} exiting={FadeOutUp} aria-expanded>
      <View style={styles.container}>
        {config.type === ToastType.SUCCESS ? (
          <Image
            source={require('@/assets/icons/toastSuccess.png')}
            width={styleUtils.getHeight(48)}
            height={styleUtils.getHeight(48)}
            style={styles.icon}
          />
        ) : config.type === ToastType.ERROR ? (
          <Image
            source={require('@/assets/icons/toastError.png')}
            width={styleUtils.getHeight(48)}
            height={styleUtils.getHeight(48)}
            style={styles.icon}
          />
        ) : config.type === ToastType.WARNING ? (
          <Image
            source={require('@/assets/icons/toastWarning.png')}
            width={styleUtils.getHeight(48)}
            height={styleUtils.getHeight(48)}
            style={styles.icon}
          />
        ) : (
          <Animated.View style={animatedStyle}>
            <Image
              source={require('@/assets/icons/toastLoading.png')}
              width={styleUtils.getHeight(48)}
              height={styleUtils.getHeight(48)}
              style={styles.icon}
            />
          </Animated.View>
        )}
        <Text style={styles.messgae}>{config.message}</Text>
      </View>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  container: {
    minWidth: styleUtils.getWidth(170),
    paddingVertical: styleUtils.getHeight(16),
    paddingHorizontal: styleUtils.getWidth(12),
    borderRadius: styleUtils.getWidth(8),
    alignItems: 'center',
    justifyContent: 'center',
    gap: styleUtils.getHeight(12),
    backgroundColor: styleUtils.hexToRgba('#000000', 0.84),
  },
  icon: {
    width: styleUtils.getHeight(24),
    height: styleUtils.getHeight(24),
  },
  messgae: {
    fontSize: styleUtils.getFontSize(13),
    color: '#FFFFFF',
  },
})

export default Toast
