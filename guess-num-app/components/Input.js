import React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { THEME } from '../shared/theme/colors';

const InputComponent = props => {
  return (
    <TextInput {...props} style={{...styles.input, ...props.style}} />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 30,
    borderBottomColor: THEME.primary.shade500,
    borderBottomWidth: 1,
  }
});

export default InputComponent;
