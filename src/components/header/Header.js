import { View, Text } from 'react-native'
import React from 'react'
import { Styles } from './HeaderCss'

export default function Header() {
  return (
    <View style={Styles.mainContainer} > 
        <Text style={Styles.textStyle} >Products</Text>
    </View>
  )
}