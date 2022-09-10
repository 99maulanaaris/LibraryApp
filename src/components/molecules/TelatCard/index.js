import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Buttons from '../../atoms/Buttons';
import {Buku8, IcPerson} from '../../../assets';
import Gap from '../../atoms/Gap';

const TelatCard = ({gambar = Buku8, judul, pinjam, kembali}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View>
        <Image source={gambar} style={{height: 146, width: 100}} />
      </View>
      <View style={styles.wrapper}>
        <Text style={styles.title}>{judul}</Text>
        <Gap height={10} />
        <View>
          <Gap height={10} />
          <Text style={styles.tanggal}>
            Tgl. Pinjam <Gap Width={42} /> {pinjam}
          </Text>
          <Text style={styles.tanggal}>Tgl. Pengembalian : {kembali}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default TelatCard;

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
  tanggal: {
    color: '#020202',
    fontSize: 14,
  },
});
