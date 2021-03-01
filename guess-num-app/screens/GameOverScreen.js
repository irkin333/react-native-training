import React from 'react';
import { StyleSheet, View, Text, Button, Image } from 'react-native';
import { THEME } from '../shared/theme/colors';
import Card from '../components/Card';
import FONT_STYLE from '../shared/general-styles/fonts';


const GameOverScreenComponent = props => {
  return (
    <View style={styles.screen}>
      <Image style={styles.image}
             source={{uri: 'https://funduk.ua/upload/iblock/800/8007c3e74424cf9c60464f0ff6ce0656.jpg'}}
            //  source={require("../assets/images/game-over.jpg")} //locally loaded image
             resizeMode="contain"
             fadeDuration="500"/>
      <Text style={styles.text}>
        Your phone needed <Text style={styles.highlight}>{props.rounds}</Text> rounds to guess the number {props.userChoice}
      </Text>
      <Card styles={styles.buttonContainer}>
        <Button title="Start new Game" onPress={props.onStartGame.bind(this, undefined)} />
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
  },
  text: {
    ...FONT_STYLE.default,
    textAlign: 'center'
  },
  image: {
    width: 150,
    height: 75,
    marginVertical: 15
  },
  highlight: {
    ...FONT_STYLE.default,
    fontSize: 22,
    color: THEME.secondary.accent,
    paddingHorizontal: 10
  }
});

export default GameOverScreenComponent;
