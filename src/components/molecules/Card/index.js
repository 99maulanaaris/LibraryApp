import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {Buku1, Buku8} from '../../../assets';

const Card = ({gambar = Buku8, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{marginHorizontal: 5, marginBottom: 10}}>
        <Image source={gambar} style={{height: 146, width: 100}} />
      </View>
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({});
