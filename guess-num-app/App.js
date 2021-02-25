import React from 'react';
import { StyleSheet, View } from 'react-native';
import HeaderComponent from './components/Header';
import StartGameComponent from './screens/StartGameScreen';

export default function App() {
  return (
    <View style={styles.appWrapper}>
      <HeaderComponent title="Guess a Number"/>
      <StartGameComponent />
    </View>
  );
}

const styles = StyleSheet.create({
  appWrapper: {
    flex: 1
  }
});
