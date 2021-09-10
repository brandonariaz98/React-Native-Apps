import React from 'react'
import { SafeAreaView } from 'react-native';
import { TareaScreen } from './src/screens/TareaScreen';
// import { ContadorScreen } from './src/screens/ContadorScreen';
// import HolaMundoScreen from './src/screens/HolaMundoScreen';
// import { BoxObjectModelScreen } from './src/screens/BoxObjectModelScreen';
// import { DimensionesScreen } from './src/screens/DimensionesScreen';
//import { PositionScreen } from './src/screens/PositionScreen';
// import { FlexScreen } from './src/screens/FlexScreen';

export const App = () => {
  return (

    
    <SafeAreaView style={{ 
      flex: 1,
      backgroundColor: '#28425B'
    }}>
      {/* <DimensionesScreen /> */}
      {/* <BoxObjectModelScreen /> */}
      {/* <ContadorScreen /> */}
      {/* <HolaMundoScreen />   */}
      {/* <PositionScreen /> */}
      {/* <FlexScreen /> */}
      <TareaScreen />
    </SafeAreaView>
  )
}

export default App;