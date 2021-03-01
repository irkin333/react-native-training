import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { THEME } from '../shared/theme/colors';
import FONT_STYLE from '../shared/general-styles/fonts';

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
    ...FONT_STYLE.title,
    fontSize: 24,
    color: THEME.secondary.extraLight
  }
});

export default HeaderComponent;
