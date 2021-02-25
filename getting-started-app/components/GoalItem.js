import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const GoalItem = props => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={props.onDelete.bind(this, props.id)}>
      <View style={styles.listItem}>
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  listItem: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginVertical: 5,
    backgroundColor: '#cecece',
    borderColor: 'gray',
    borderWidth: 1
  }
});

export default GoalItem;
