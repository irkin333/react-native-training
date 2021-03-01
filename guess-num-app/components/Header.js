import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { THEME } from '../shared/theme/colors';

const HeaderComponent = props => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingTop: 40,
    width: '100%',
    height: 90,
    backgroundColor: THEME.primary.shade800,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  headerTitle: {
    fontFamily: 'poppins-semibold',
    color: THEME.secondary.extraLight,
    fontSize: 22
  }
});

export default HeaderComponent;
