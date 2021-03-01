import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import HeaderComponent from './components/Header';
import StartGameComponent from './screens/StartGameScreen';
import GameScreenComponent from './screens/GameScreen';
import GameOverScreenComponent from './screens/GameOverScreen';
import AppLoading from 'expo-app-loading'; 
import * as Font from 'expo-font';

const fetchFonts = () => {
  return Font.loadAsync({
    'poppins-thin': require('./assets/fonts/Poppins-Thin.ttf'),
    'poppins-regular': require('./assets/fonts/Poppins-Regular.ttf'),
    'poppins-semibold': require('./assets/fonts/Poppins-SemiBold.ttf'),
  });
};

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [roundsNumber, setRoundsNumber] = useState(0);
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return <AppLoading startAsync={fetchFonts}
                       onFinish={() => { setDataLoaded(true) }}
                       onError={(error) => { console.log(error) }} />
  }

  const startGameHandler = selectedNumber => {
    setUserNumber(selectedNumber);
    setRoundsNumber(0);
  };

  const gameOverHandler = numOfRounds => {
    setRoundsNumber(numOfRounds);
  };
  let content = <StartGameComponent onStartGame={startGameHandler} />;
  if(userNumber && roundsNumber <= 0) {
    content = <GameScreenComponent userChoice={userNumber} onGameOver={gameOverHandler} />
  } else if(roundsNumber > 0) {
    content = <GameOverScreenComponent rounds={roundsNumber} onStartGame={startGameHandler} />
  }
  return (
    <View style={styles.appWrapper}>
      <HeaderComponent title='Guess a Number'/>
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  appWrapper: {
    flex: 1
  }
});
