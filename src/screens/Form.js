import { ScrollView, StyleSheet, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TextInput } from 'react-native-paper'
import MapSelectLocation from '../components/form/MapSelectLocation'

export default function Form() {
  const [text, setText] = React.useState('')
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text>Form</Text>
        <TextInput label='Email' value={text} mode='outlined' onChangeText={(text) => setText(text)} />
        <MapSelectLocation />
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
})
