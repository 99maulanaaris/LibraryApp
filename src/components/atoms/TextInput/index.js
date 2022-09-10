import React from 'react';
import {StyleSheet, Text, View, TextInput as Input, Image} from 'react-native';
import {IcEmail} from '../../../assets';

const TextInput = ({gambar = IcEmail, ...rest}) => {
  return (
    <View style={styles.container}>
      <Image source={gambar} />
      <Input style={styles.input} {...rest} />
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  container: {
    color: 'black',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  label: {
    color: '#020202',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#020202',
    borderRadius: 10,
    color: 'black',
    width: 300,
    fontSize: 16,
    padding: 10,
  },
});
