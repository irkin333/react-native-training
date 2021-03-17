import { Platform } from 'react-native';

export const navigationOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? '#E6BAFF' : '#ffffff',
  },
  headerTintColor: Platform.OS === 'android' ? '#2F0F7A' : '#843CDB'
}