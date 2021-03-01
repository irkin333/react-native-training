import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { THEME } from '../shared/theme/colors';

const AppButton = props => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{props.children}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: THEME.secondary.info,
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 5,
    shadowColor: THEME.primary.shade600,
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 2,
    shadowOpacity: 1
  },
  buttonText: {
    color: THEME.secondary.extraLight,
    fontFamily: 'poppins-regular',
    fontSize: 18
  }
});

export default AppButton;
