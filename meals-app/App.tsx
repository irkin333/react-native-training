import React, { useState } from 'react';
import AppLoading from 'expo-app-loading'; 
import * as Font from 'expo-font';
import MealsNavigator from './navigation/meals-navigation';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry, Layout } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { enableScreens } from 'react-native-screens';
import { default as theme } from './shared/theme/meals-app-theme.json';
import { default as mapping } from './shared/general-styles/meals-typography.json'; // <-- Import app mapping
import {AppNavigator} from './kitten-nav/navigation.component';

enableScreens();
const fetchFonts = () => {
  return Font.loadAsync({
    'OpenSans-Bold': require('./assets/fonts/OpenSans-Bold.ttf'),
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
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }} customMapping={mapping as any}>
        <Layout style={{flex: 1}} level='1'>
          <MealsNavigator />
        </Layout>
        {/* <AppNavigator/> */}
      </ApplicationProvider>
    </>
  );
}