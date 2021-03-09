import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  Dimensions,
  ScrollView,
  KeyboardAvoidingView } from 'react-native';
import Card from '../components/Card';
import InputComponent from '../components/Input';
import NumberComponent from '../components/NumberComponent';
import AppButton from '../components/AppButton';
import { THEME } from '../shared/theme/colors'; 
import FONT_STYLE from '../shared/general-styles/fonts';

const StartGameComponent = props => {
  const [enteredValue, setEnteredValue] = useState(''); 
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();
  const [btnWidth, setBtnWidth] = useState(Dimensions.get('window').width / 3.5);

  useEffect(() => {
    const updateLayout = () => {
      setBtnWidth(Dimensions.get('window').width / 3.5);
    };
    Dimensions.addEventListener('change', updateLayout);

    return () => {
      Dimensions.removeEventListener('change', updateLayout);
    }
  });

  const nuberInputHandler = (inputText) => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ''));
  };
  const resetInputHandler = () => {
    setEnteredValue('');
    setConfirmed(false);
  };
  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredValue);
    if(isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        'The number is invalid!',
        'Number has to be a number between 1 and 99.', 
        [{text: 'Ok', style: 'default', onPress: resetInputHandler}]);
      return;
    }
    setConfirmed(true);
    setSelectedNumber(parseInt(enteredValue));
    setEnteredValue('');
  };
  let confirmedOutput;

  if(confirmed) {
    confirmedOutput = (
    <Card styles={styles.summaryContainer}>
      <Text style={styles.text}>You selected</Text>
      <NumberComponent>{selectedNumber}</NumberComponent>
      <AppButton onPress={() => { props.onStartGame(selectedNumber) }}>Start Game</AppButton>
    </Card>
    );
  }

  return (
    <ScrollView style={styles.wrapper}>
      <KeyboardAvoidingView style={styles.wrapper} behavior="position">
        <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss(); }} style={styles.wrapper}>
          <View style={styles.screen}>
            <Text style={styles.title}>Start a new Game!</Text>
            <Card styles={styles.inputContainer}>
              <InputComponent placeholder="Select a number !"
                              style={styles.input}
                              blurOnSubmit
                              autoCapitalize="none"
                              autoCorrect={false}
                              keyboardType="number-pad"
                              maxLength={2}
                              onChangeText={nuberInputHandler}
                              value={enteredValue} />
              <View style={styles.buttonContainer}>
                <View style={{...styles.button, width: btnWidth}}><Button title="Reset" onPress={resetInputHandler} color={THEME.secondary.error}/></View>
                <View style={{...styles.button, width: btnWidth}}><Button title="Confirm" onPress={confirmInputHandler} color={THEME.secondary.info}/></View> 
              </View>
            </Card>
            {confirmedOutput}
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    flex: 1,
    backgroundColor: THEME.primary.shade100,
  },
  screen: {
    flex: 1,
    backgroundColor: THEME.primary.shade100,
    paddingVertical: 10,
    paddingHorizontal: 15,
    alignItems: 'center',
    color: THEME.secondary.extraDark
  },
  title: {
    ...FONT_STYLE.title,
    marginVertical: 10
  },
  inputContainer: {
    width: '80%',
    minWidth: 280,
    maxWidth: '90%',
    alignItems: 'center'
  },
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20
  },
  button: {
    marginHorizontal: 5
  },
  input: {
    width: 115,
    textAlign: 'center',
    marginBottom: 10,
     ...FONT_STYLE.default
  },
  summaryContainer: {
    marginVertical: 20,
    alignItems: 'center'
  },
  text: {
    ...FONT_STYLE.default
  }
});

export default StartGameComponent;
