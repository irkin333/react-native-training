import React from 'react';
import { Platform } from 'react-native';
import { HeaderButton } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';

export default function HeaderBtnComponent(props: {[key: string]: any}) {

  return <HeaderButton {...props}
                  title=''
                  IconComponent={Ionicons}
                  iconSize={23}
                  color={Platform.OS === 'android' ? '#2F0F7A' : '#843CDB'}/>
  
}
