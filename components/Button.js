import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

const Button = ({styleButton, styleText, onPress, text}) => {
  return (
    <TouchableOpacity
      style={{...styles.button, ...styleButton}}
      onPress={onPress}>
      <Text style={{...styles.text, ...styleText}}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 200,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'darkorange',
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 25,
  },
  text: {
    color: 'white',
    fontSize: 16
  },
});

export default Button;
