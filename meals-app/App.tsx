import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading'; 
import * as Font from 'expo-font';

const fetchFonts = () => {
  return Font.loadAsync({
    'poppins-thin': require('./assets/fonts/Poppins-Thin.ttf'),
    'poppins-extralight': require('./assets/fonts/Poppins-ExtraLight.ttf'),
    'poppins-regular': require('./assets/fonts/Poppins-Regular.ttf'),
    'poppins-semibold': require('./assets/fonts/Poppins-SemiBold.ttf'),
  });
};

export default function App() {
  const [isAppLoaded, setAppLoadedState] = useState(false);

  if (!isAppLoaded) {
    return <AppLoading startAsync={fetchFonts}
                       onFinish={() => { setAppLoadedState(true) }}
                       onError={(error) => { console.log(error) }} />
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
