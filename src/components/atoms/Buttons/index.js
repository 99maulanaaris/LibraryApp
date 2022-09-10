import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Buttons = ({
  text,
  color = '#1abc9c',
  textColor = '#23313f',
  onPress,
  width = 'auto',
}) => {
  return (
    <TouchableOpacity style={styles.container(color, width)} onPress={onPress}>
      <Text style={styles.text(textColor)}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Buttons;

const styles = StyleSheet.create({
  container: (color, width) => ({
    backgroundColor: color,
    padding: 12,
    borderRadius: 8,
    width: width,
  }),
  text: textColor => ({
    color: textColor,
    fontSize: 12,
    textAlign: 'center',
    fontWeight: 'bold',
  }),
});
