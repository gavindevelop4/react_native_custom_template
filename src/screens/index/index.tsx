import Header from '@/components/header/header'
import React from 'react'
import { Text, View } from 'react-native'

const IndexScreen = () => {
  return (
    <View>
      <Header title={'index'} showBackButton={false} />
      <Text>Index</Text>
    </View>
  )
}

export default IndexScreen
