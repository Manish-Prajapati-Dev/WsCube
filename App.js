import { View,StyleSheet } from 'react-native'
import React from 'react'
import BottomTabs from './src/navigation/tabNavigation/BottomTabs';

export default function App() {

  return (
    <View style={styles.mainContainer} >
      <BottomTabs/>
    </View>
  )
}


const styles= StyleSheet.create({
  mainContainer:{
    flex:1,
    backgroundColor:'#353b48'
  }
})
