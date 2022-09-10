import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Buttons from '../../atoms/Buttons';
import {Buku8, IcPerson} from '../../../assets';
import Gap from '../../atoms/Gap';

const Kembali = ({
  gambar = Buku8,
  confirmation,
  tglKembali,
  tglPinjam,
  judul,
}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.title}>{judul}</Text>
        <Gap height={5} />
        <Gap height={5} />
        <View>
          <Text style={styles.tanggal}>Tgl. kembali : {tglKembali} </Text>
          <Gap height={5} />
          <Text style={styles.tanggal}>Tgl. Pinjam : {tglPinjam}</Text>
          <Gap height={5} />
        </View>
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
        }}>
        {confirmation === 0 ? (
          <Text
            style={{
              color: 'white',
              backgroundColor: 'red',
              padding: 10,
              borderRadius: 10,
            }}>
            Belum Dikonfirmasi
          </Text>
        ) : (
          <Text
            style={{
              color: 'black',
              backgroundColor: '#1abc9c',
              padding: 10,
              borderRadius: 10,
            }}>
            Terkonfirmasi
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default Kembali;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
    borderBottomWidth: 1,
    borderColor: 'black',
    paddingBottom: 10,
  },
  wrapper: {width: 200, padding: 8},
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
