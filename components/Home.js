import React from 'react'
import { StyleSheet, Text, View, Alert } from 'react-native'
import { Button } from 'react-native-elements'

export default function Home() {
  return (
    <View style={styles.container}>
      <Text> This is Home Screen </Text>
      <Button
        title="press me"
        onPress={() => Alert.alert('Button pressed')}
        buttonStyle={{
          backgroundColor: 'rgba(245, 165, 39, 0.8)',
          borderRadius: 10,
        }}
        containerStyle={{
          width: 150,
          marginHorizontal: 50,
          marginVertical: 50,
        }}
      ></Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    marginTop: 0,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 0,
  },
})
