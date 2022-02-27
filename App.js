import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, Button, Alert, TextInput } from 'react-native'
import React, { useState } from 'react'

export default function App() {
  const [text, setText] = useState('')

  const buttonPressed = () => {
    Alert.alert('Hello', 'You typed: ' + text)
  }
  return (
    <View style={styles.container}>
      <TextInput
        style={{ width: 200, borderColor: 'grey', borderWidth: 1 }}
        value={text}
        onChangeText={(text) => setText(text)}
      />

      <Button onPress={buttonPressed} title="press me"></Button>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
