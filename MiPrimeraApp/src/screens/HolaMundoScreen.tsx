import React from 'react'
import { Text, View } from 'react-native';

export const HolaMundoScreen = () => {
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center'
    }}>
      <Text style={{
        fontSize: 55,
        textAlign: 'center'
      }}>Hola Mundillo</Text>
    </View>
  )
}
export default HolaMundoScreen;
