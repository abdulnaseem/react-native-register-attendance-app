import React from 'react';
import { Pressable, Text } from 'react-native';
import style from './button.styled';

const Button = ({
   title = '', 
   isDisabled = false, 
   onPress = () => {},
}) => (

 <Pressable
   disabled={isDisabled}
   style={[style.button, isDisabled && style.disabled]}
   onPress={() => onPress()}>
   <Text style={style.title}>{title}</Text>
 </Pressable>
);

export default Button;
