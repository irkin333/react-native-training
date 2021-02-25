import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Button, Modal } from 'react-native';

const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState('');
  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addNewGoal = () => {
    props.onAddGoal(enteredGoal);
    setEnteredGoal('');
  }

  return (
    <Modal visible={props.mode} animationType="slide" style={styles.modal}>
      <View style={styles.modal}>
        <View style={styles.inputBox}>
          <TextInput placeholder="Enter your goal" style={styles.input} onChangeText={goalInputHandler} value={enteredGoal}/>
          <View style={styles.cancelBtn}>
            <Button title="Cancel" color="#ba262b" onPress={props.onCancel} />
          </View>
          <Button title="Add" onPress={addNewGoal}/>
        </View>
      </View>
    </Modal>
  )
};

const styles = StyleSheet.create({
  inputBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 10
  },
  input: {
    borderBottomColor: '#cecece',
    borderBottomWidth: 1,
    marginBottom: 15,
    padding: 5,
    flexGrow: 1,
    marginRight: 10
  },
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  cancelBtn: {
    marginRight: 10
  }
});

export default GoalInput;
