import React from 'react';
import { StyleSheet, View, Switch } from 'react-native';
import { Text} from '@ui-kitten/components';

const SwitchStateComponent = (props: any) => {
  return (
    <View style={styles.filterContainer}>
      <Text>{props.title}</Text>
      <Switch value={props.state}
              trackColor={{ false: '#fffff', true: '#843CDB' }}
              onValueChange={props.onChange}/>
    </View>
  );
};

const styles = StyleSheet.create({
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    marginVertical: 10
  }
});

export default SwitchStateComponent;