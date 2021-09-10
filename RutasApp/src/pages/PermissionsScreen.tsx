import React, { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { BlackButton } from '../components/BlackButton';
import { PermissionsContext } from '../context/PermissionsContext'

export const PermissionsScreen = () => {
  const { permissions, askLocationPermission } = useContext( PermissionsContext );

  // function prueba() {

  //   // MAX AND MIN
  //     // const arr = [1,3,5,7,9];
    
  //     // var arrClone1 = arr.slice() 
  //     // var arrClone2 = arr.slice() 
        
  //     // var arrMinor = arrClone1.sort(function(a, b){return a - b;})
  //     // arrMinor.pop()
    
  //     // var arrMajor = arrClone2.sort(function(a, b){return b - a;})
  //     // arrMajor.pop()

  //     // function getSum(a: any, b: any) {
  //     //   return a + b;
  //     // }
    
  //     // var result1 = arrMinor.reduce(getSum) 
  //     // var result2 = arrMajor.reduce(getSum)    
    
  //     // console.log(`${result1} ${result2}`)

  //     //DIAGONAL
  //     // const matrix = [[1,2,3], [4,5,6], [9,8,9]];
  //     // var n = matrix.length;
  //     // console.log(n);
      
  //     // var diag1 = 0;
  //     // var diag2 = 0;

  //     // for(var i=0; i<n; i++){
  //     //     for(var j=0; j<n; j++){
  //     //         // an element from the main diagonal
  //     //         if(i === j) { 
  //     //             diag1 += matrix[i][j];
  //     //         }
  //     //         // an element from the counterdiagonal
  //     //         console.log(i, j, n);
              
  //     //         if(i + j === n - 1){
  //     //             diag2 += matrix[i][j];
  //     //         }
  //     //     }
  //     // }
  //     //  console.log(Math.abs(diag1 - diag2));

  //     //ISFIBO
  //     const num: number = 2584;
  //     const isFibonacci = (num: number) => {
  //       if(num === 0 || num === 1){
  //           return true;
  //       }
  //       let prev = 1;
  //       let count = 2;
  //       let temp = 0;
  //       while(count <= num){
  //           if(prev + count === num){
  //             return "IsFIBO";
  //           };
  //           temp = prev;
  //           prev = count;
  //           count += temp;
  //       };
  //       return "NOFIBO";
  //     };  

  //     console.log(isFibonacci(6765));
  //     console.log(isFibonacci(45));
  //     console.log(isFibonacci(8767));
  // }

  return (
    <View style={ styles.container } >
      <Text style={styles.title} >Es necesario el uso del GPS para esta App.</Text>

      <BlackButton 
        title="Permiso"
        onPress={ askLocationPermission }
      />

      <Text style={{ marginTop: 20 }}>
        { JSON.stringify(permissions, null, 5)}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    width: 200,
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20
  }
});