import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useDispatch, useSelector} from 'react-redux';
import {IcBell, IcHistories, IcKembali, IcTelat} from '../../assets';
import {CardReport, Gap, ReportTabSection} from '../../components';
import {
  getDataKembali,
  getDataPinjaman,
  getHistory,
  getTelat,
} from '../../redux/action';
import {getData} from '../../utils';

const Laporan = () => {
  const {book, kembali, telat, history} = useSelector(
    state => state.laporanReducer,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDataPinjaman());
    dispatch(getDataKembali());
    dispatch(getTelat());
    dispatch(getHistory);
  }, []);

  return (
    <LinearGradient
      style={{flex: 1}}
      start={{x: 0.0, y: 0.1}}
      end={{x: 0.25, y: 0.5}}
      locations={[0, 0.5, 0.6]}
      colors={['#11998e', '#38ef7d', '#ffffff']}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 20,
          paddingVertical: 10,
        }}>
        <View>
          <Text style={{color: 'black', fontSize: 20}}>Laporan Buku</Text>
        </View>
        <View>
          <Image source={IcBell} />
        </View>
      </View>
      <Gap height={20} />
      <View>
        <ScrollView horizontal style={{paddingHorizontal: 5}}>
          <CardReport label="Jumlah Peminjaman" jumlah={book.length} />
          <CardReport
            gambar={IcKembali}
            color="#3498DB"
            label="Jumlah Pengembalian"
            jumlah={kembali.length}
          />
          <CardReport
            gambar={IcTelat}
            color="#E74C3C"
            label="Jumlah Telat"
            jumlah={telat.length}
          />
          <CardReport
            gambar={IcHistories}
            color="#694BA4"
            label="History"
            jumlah={history.length}
          />
        </ScrollView>
      </View>
      <Gap height={10} />
      <ReportTabSection />
    </LinearGradient>
  );
};

export default Laporan;

const styles = StyleSheet.create({});
