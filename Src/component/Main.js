// HomePage.js
import React from 'react';
import { View, Button } from 'react-native';

const Main = ({ navigation }) => {
  return (
    <View>
      <Button title="Teacher" onPress={() => navigation.navigate('teacher')} />
      <Button title="Online" onPress={() => navigation.navigate('online')} />
      <Button title="Portal" onPress={() => navigation.navigate('portal')} />
    </View>
  );
};

export default Main;
