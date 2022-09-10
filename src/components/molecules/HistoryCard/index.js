import React, {useEffect} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {Buku8, IcPerson} from '../../../assets';
import Gap from '../../atoms/Gap';
import {useDispatch} from 'react-redux';

import Buttons from '../../atoms/Buttons';

const HistoryCard = ({
  gambar = Buku8,
  id,
  tglkembali,
  tglPinjaman,
  judul,
  pengarang,
  penerbit,
  batasWaktu,
}) => {
  const dispatch = useDispatch();

  return (
    <TouchableOpacity style={styles.container}>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Image source={gambar} style={{height: 146, width: 100}} />
      </View>
      <View style={styles.wrapper}>
        <Text style={styles.title}> {judul} </Text>
        <Gap height={5} />
        <Text style={styles.penerbit}>{penerbit}</Text>
        <Gap height={5} />
        <View style={styles.wrapperPengarang}>
          <Image source={IcPerson} />
          <Text style={styles.pengarang}>{pengarang}</Text>
        </View>
        <Gap height={5} />
        <View>
          <Text style={styles.tanggal}>Tgl. Pinjam :{tglPinjaman} </Text>
          <Gap height={5} />
          <Text style={styles.tanggal}>Tgl. Kembali : {tglkembali}</Text>
          <Gap height={5} />
          <Text style={styles.tanggal}>Batas Waktu : {batasWaktu}</Text>
          <Gap height={5} />
          <Buttons text="Terkonfirmasi" textColor="white" color="#38ef7d" />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default HistoryCard;

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
