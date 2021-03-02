import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, View, Text, Alert, ScrollView, FlatList } from 'react-native';
import NumberComponent from '../components/NumberComponent'
import AppButton from '../components/AppButton'
import Card from '../components/Card';
import { Ionicons } from '@expo/vector-icons';
import { THEME } from '../shared/theme/colors';
import FONT_STYLE from '../shared/general-styles/fonts';


const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  }
  return rndNum;
};

const renderListItem = (numOfRounds, value) => {
  return (
    <View style={styles.listItem}>
      <Text style={styles.text}>#{numOfRounds - value.index}</Text>
      <Text>  </Text>
      <Text style={styles.text}>{value.item}</Text>
    </View>
  );
}

const GameScreenComponent = props => {
  const currentLow = useRef(1);
  const currentHigh = useRef(100);
  const initialGuess = generateRandomBetween(currentLow.current, currentHigh.current, props.userChoice);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [rounds, setRounds] = useState([initialGuess.toString()]);
  const { userChoice, onGameOver } = props;

  useEffect(() => {
    if (currentGuess === userChoice) {
      onGameOver(rounds.length);
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
      currentLow.current = currentGuess + 1;
    }

    const nextNumber = generateRandomBetween(currentLow.current, currentHigh.current, currentGuess);
    setCurrentGuess(nextNumber);
    setRounds(curRounds => [nextNumber.toString(), ...curRounds]);
  };

  return (
    <View style={styles.screen}>
      <Text style={styles.text}>Opponent's guess:</Text>
      <NumberComponent>{currentGuess}</NumberComponent>
      <Card styles={styles.buttonContainer}>
        <AppButton onPress={nextGuessHandler.bind(this, 'lower')}>
          <Ionicons name='md-remove' size={30}/>
        </AppButton>
        <AppButton onPress={nextGuessHandler.bind(this, 'greater')}>
          <Ionicons name='md-add' size={30}/>
        </AppButton>
      </Card>

      <View style={styles.list}>
        {/* <ScrollView contentContainerStyle={styles.contentContainer}>
          {rounds.map((guess, i) => renderListItem(guess, rounds.length - i))}
        </ScrollView> */}

        <FlatList keyExtractor={item => item} data={rounds} renderItem={renderListItem.bind(this, rounds.length)}/>
      </View>
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
  },
  text: {
     ...FONT_STYLE.default
  },
  list: {
    marginTop: 15
  },
  listItem: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: THEME.primary.shade300,
    borderWidth: 1,
    padding: 15,
    backgroundColor: THEME.secondary.extraLight,
    marginTop: -1
  },
  contentContainer: {
    // minWidth: '50%',
    // justifyContent: 'flex-end',
    // height: '100%'
  }
});

export default GameScreenComponent;
