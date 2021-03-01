import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { THEME } from '../shared/theme/colors';
import FONT_STYLE from '../shared/general-styles/fonts';


const NumberComponent = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{props.children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: THEME.secondary.accent,
    borderWidth: 2,
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 60
  },
  number: {
    ...FONT_STYLE.default,
    color: THEME.secondary.accent,
    fontSize: 22
  }
});

export default NumberComponent;
