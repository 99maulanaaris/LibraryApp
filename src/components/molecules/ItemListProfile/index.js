import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Gap from '../../atoms/Gap';

const ItemListProfile = ({text, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={{color: '#020202', fontSize: 14}}>{text}</Text>
      <Gap height={10} />
    </TouchableOpacity>
  );
};

export default ItemListProfile;

const styles = StyleSheet.create({});
