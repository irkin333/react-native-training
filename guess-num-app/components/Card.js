import React from 'react';
import { StyleSheet, View } from 'react-native';

const Card = props => {
  return (
    <View style={{...styles.card, ...props.styles}}>{props.children}</View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 15,
    shadowColor: '#616161',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.3,
    elevation: 5,
    backgroundColor: '#FAFAFA',
    borderRadius: 10
  }
});

export default Card;
