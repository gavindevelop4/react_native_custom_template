import React, { useEffect, useState } from 'react'
import Header from '@/components/header/header'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import { useTheme } from '@rneui/themed'
import styleUtils from '@/utils/styleUtils'
import cacheUtils, { StorageKey } from '@/utils/cacheUtils'

const CacheScreen = () => {
  const { theme } = useTheme()
  const styles = StyleSheet.create({
    section: {
      paddingHorizontal: styleUtils.getWidth(16),
      paddingVertical: styleUtils.getHeight(12),
      gap: styleUtils.getHeight(16),
    },
    title: {
      color: theme.colors.TITLE_1,
      fontSize: styleUtils.getFontSize(20),
      textAlign: 'center',
    },
    textInput: {
      marginHorizontal: styleUtils.getWidth(25),
      marginBottom: styleUtils.getHeight(28),
      borderColor: theme.colors.BORDER,
      borderWidth: 1,
      paddingHorizontal: styleUtils.getWidth(12),
      paddingVertical: styleUtils.getHeight(12),
    },
    textInputText: {
      fontSize: styleUtils.getFontSize(12),
    },
  })

  const [text, setText] = useState('')
  const [cachedText, setCachedText] = useState('')

  const getCachedText = async () => {
    const result = (await cacheUtils.getString(StorageKey.EXAMPLE)) ?? ''
    setCachedText(result)
  }

  const handlePress = async () => {
    await cacheUtils.storeString(StorageKey.EXAMPLE, text)
    getCachedText()
    setText('')
  }

  useEffect(() => {
    getCachedText()
  }, [])

  return (
    <View>
      <Header title={'Cache'} />
      <View style={styles.section}>
        <Text style={styles.title}>Cached: {cachedText}</Text>
        <Text>
          Enter the text and press the button to cache it. The text will keep
          even close the app
        </Text>
        <View style={styles.textInput}>
          <TextInput
            style={styles.textInputText}
            value={text}
            onChangeText={setText}
          />
        </View>
        <Button title="Cache Text" onPress={handlePress} />
      </View>
    </View>
  )
}

export default CacheScreen
