import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

const Portal = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <WebView
        source={{ uri:'http://stjoseph.ilakshyaeducation.com/sjsmrj/login'}}
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

export default Portal;
