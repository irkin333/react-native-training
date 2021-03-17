import React from 'react';
import { HeaderButton } from 'react-navigation-header-buttons';
import { Icon } from '@ui-kitten/components';

const IconWrapper = (props:  {[key: string]: any}) => {
  const icoStyle = {
    width: 22,
    height: 22
  };
  return <Icon {...props} fill={props.color} style={{ ...icoStyle, ...props.style }}/>
}

export default function HeaderBtnComponent(props: {[key: string]: any}) {

  return <HeaderButton {...props}
                      title=''
                      IconComponent={IconWrapper}
                      iconSize={23}/>
}
