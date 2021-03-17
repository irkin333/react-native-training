import React from 'react';
import { Platform } from 'react-native';
import { HeaderButton } from 'react-navigation-header-buttons';
import { Icon } from '@ui-kitten/components';

const IconWrapper = (props:  {[key: string]: any}) => {
  return <Icon {...props} fill={props.color} style={{width: 22, height: 22}}/>
}

export default function HeaderBtnComponent(props: {[key: string]: any}) {

  return <HeaderButton {...props}
                      title=''
                      IconComponent={IconWrapper}
                      iconSize={23}
                      color={Platform.OS === 'android' ? '#2F0F7A' : '#843CDB'}/>
}
