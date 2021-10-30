import React from 'react';
import { HeaderButton } from 'react-navigation-header-buttons';

const CustomHeaderButton = props => {
  return (
    <HeaderButton
      {...props}
      IconComponent={props.iconSet}
      iconSize={props.iconSize}
      buttonStyle={{marginRight: props.marginRight, marginLeft: props.marginLeft}}
    />
  );
};

export default CustomHeaderButton;
