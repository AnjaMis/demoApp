import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function AnotherPage() {
  return (
    <View style={styles.container}>
      <Text>Another Page here</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
