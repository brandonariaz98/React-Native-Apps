import React from 'react';
import {useEffect} from 'react';
import {Text, View} from 'react-native';

export const Tab1Screen = () => {
  useEffect(() => {
    console.log('====================================');
    console.log('Tab1Screen effect');
    console.log('====================================');
  }, []);

  return (
    <View>
      <Text> Tab1Screen </Text>
    </View>
  );
};
