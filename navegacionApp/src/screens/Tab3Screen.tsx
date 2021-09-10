import React, {useEffect} from 'react';
import {Text, View} from 'react-native';

export const Tab3Screen = () => {
  useEffect(() => {
    console.log('====================================');
    console.log('Tab3Screen effect');
    console.log('====================================');
  }, []);

  return (
    <View>
      <Text> Tab3Screen </Text>
    </View>
  );
};
