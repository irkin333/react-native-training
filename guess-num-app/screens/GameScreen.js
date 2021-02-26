import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, View, Text, Button, Alert } from 'react-native';
import NumberComponent from '../components/NumberComponent'
import Card from '../components/Card';
import { THEME } from '../shared/theme/colors';


const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  }
  return rndNum;
};

const GameScreenComponent = props => {
  const currentLow = useRef(1);
  const currentHigh = useRef(100);
  const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(currentLow.current, currentHigh.current, props.userChoice));
  const [rounds, setRounds] = useState(0);
  const { userChoice, onGameOver } = props;

  useEffect(() => {
    if (currentGuess === userChoice) {
      onGameOver(rounds);
    }
  }, [currentGuess, userChoice, onGameOver]);

  const nextGuessHandler = direction => {
    if ((direction === 'lower' && currentGuess < userChoice) || (direction === 'greater' && currentGuess > userChoice)) {
      Alert.alert(
        'Do not lie!',
        'You know, this is wrong hint.',
        [{text: 'Sorry!', style: 'cancel'}]
      );
      return
    }

    if (direction === 'lower') {
      currentHigh.current = currentGuess;
    }

    if (direction === 'greater') {
      currentLow.current = currentGuess;
    }

    const nextNumber = generateRandomBetween(currentLow.current, currentHigh.current, currentGuess);
    setCurrentGuess(nextNumber);
    setRounds(curRounds => curRounds + 1);
  };

  return (
    <View style={styles.screen}>
      <Text>Opponent's guess:</Text>
      <NumberComponent>{currentGuess}</NumberComponent>
      <Card styles={styles.buttonContainer}>
        <Button title="LOWER" onPress={nextGuessHandler.bind(this, 'lower')} />
        <Button title="GREATER" onPress={nextGuessHandler.bind(this, 'greater')} />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: THEME.primary.shade100,
    paddingVertical: 10,
    paddingHorizontal: 15,
    alignItems: 'center',
    color: THEME.secondary.extraDark,
    width: '100%'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    width: 300,
    maxWidth: '80%'
  }
});

export default GameScreenComponent;
