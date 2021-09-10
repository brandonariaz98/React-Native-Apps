import React, {useEffect} from 'react';
import {Text, View} from 'react-native';

export const Tab2Screen = () => {
  useEffect(() => {
    console.log('====================================');
    console.log('Tab2Screen effect');
    console.log('====================================');
  }, []);

  return (
    <View>
      <Text> Tab2Screen </Text>
    </View>
  );
};
