import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { THEME } from '../shared/theme/colors';
import Card from '../components/Card';

const GameOverScreenComponent = props => {
  return (
    <View style={styles.screen}>
      <Text>The Game is over in {props.rounds} rounds</Text>
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
  }
});

export default GameOverScreenComponent;
