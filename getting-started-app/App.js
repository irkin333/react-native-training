import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([])
  const [addMode, setAddMode] = useState(false)

  const addGoalHandler = (goalTitle) => {
    setCourseGoals(currentGoals => [
      ...currentGoals,
      { key: Math.random().toString(), value: goalTitle }
    ]);
    cancelGoal();
  };

  const deleteGoal = (goalId) => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter(goal => {
        return goal.key !== goalId;
      })
    });
  };

  const cancelGoal = () => {
    setAddMode(false);
  };
  
  return (
    <View style={styles.wrapper}>
      <Button title="Add new goal" onPress={() => setAddMode(true)} />
      <GoalInput mode={addMode} onAddGoal={addGoalHandler} onCancel={cancelGoal}/>
      <FlatList data={courseGoals} renderItem={itemData => {
        return <GoalItem title={itemData.item.value}
                  id={itemData.item.key}
                  onDelete={deleteGoal}/>
      }}/>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    paddingVertical: 45,
    paddingHorizontal: 10
  }
});
