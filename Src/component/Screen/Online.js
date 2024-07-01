import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

const Online = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <WebView
        source={{ uri:'https://regsjsmrj.ilakshyaeducation.com/'}}
        style={styles.webview}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
});

export default Online;
