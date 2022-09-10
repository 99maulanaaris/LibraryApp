import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {IcProgress} from '../../../assets';

const Informasi = () => {
  return (
    <View style={styles.informasi}>
      <Text style={styles.status}>Satus Informasi</Text>
      <View style={styles.wrapper}>
        <View>
          <Image source={IcProgress} />
        </View>
        <View style={styles.header}>
          <Text style={styles.nama}>Nama Anggota : Haris Maulana</Text>
          <Text style={styles.pinjaman}>Pinjaman : 20</Text>
          <Text style={styles.pengembalian}>Pengembalian : 20</Text>
          <Text style={styles.telat}>Telat : 10</Text>
        </View>
      </View>
    </View>
  );
};

export default Informasi;

const styles = StyleSheet.create({
  informasi: {
    backgroundColor: '#1abc9c',
    marginHorizontal: 5,
    borderRadius: 30,
    paddingVertical: 5,
  },
  status: {
    fontSize: 20,
    fontWeight: '600',
    color: '#23313f',
    textAlign: 'center',
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    width: 330,
    padding: 10,
    borderRadius: 10,
  },
  header: {
    backgroundColor: 'white',
    padding: 10,
    marginLeft: 10,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 20,
    width: 250,
  },
  body: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  nama: {
    color: '#23313f',
  },
  pinjaman: {
    color: '#23313f',
  },
  pengembalian: {
    color: '#23313f',
  },
  telat: {
    color: '#23313f',
  },
});
