import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {IcPinjam} from '../../../assets';

const CardReport = ({
  gambar = IcPinjam,
  color = '#1ABC9C',
  label = 'pinjaman',
  jumlah = 0,
}) => {
  return (
    <View style={styles.container(color)}>
      <View style={styles.wrapper}>
        <View
          style={{
            flex: 1,
          }}>
          <Text style={styles.title}>{label}</Text>
          <Text style={styles.jumlah}>{jumlah}</Text>
        </View>
        <View style={styles.gambar}>
          <Image source={gambar} />
        </View>
      </View>
    </View>
  );
};

export default CardReport;

const styles = StyleSheet.create({
  container: color => ({
    backgroundColor: color,
    width: 260,
    height: 130,
    padding: 10,
    borderRadius: 20,
    marginHorizontal: 10,
  }),
  wrapper: {
    borderWidth: 1,
    borderColor: 'white',
    borderStyle: 'dashed',
    borderRadius: 10,
    flexDirection: 'row',
    padding: 10,
  },
  title: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  jumlah: {
    color: 'white',
    fontSize: 50,
    textAlign: 'center',
  },
  gambar: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
