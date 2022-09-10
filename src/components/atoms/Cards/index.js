import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Buku8, IcPerson} from '../../../assets';
import Gap from '../Gap';

const Cards = ({gambar = Buku8, judul, penerbit, pengarang, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View>
        <Image source={gambar} style={{height: 146, width: 100}} />
      </View>
      <View style={styles.wrapper}>
        <Text style={styles.title}>{judul}</Text>
        <Gap height={5} />
        <Text style={styles.penerbit}>{penerbit}</Text>
        <Gap height={5} />
        <View style={styles.wrapperPengarang}>
          <Image source={IcPerson} />
          <Text style={styles.pengarang}>{pengarang}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Cards;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
    borderBottomWidth: 1,
    borderColor: 'black',
    paddingBottom: 10,
  },
  wrapper: {width: 250, padding: 8},
  title: {color: '#020202', fontSize: 16, fontWeight: 'bold'},
  penerbit: {color: 'grey', fontSize: 12},
  wrapperPengarang: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  pengarang: {
    color: '#020202',
    marginRight: 100,
    fontStyle: 'italic',
    fontSize: 14,
  },
});
