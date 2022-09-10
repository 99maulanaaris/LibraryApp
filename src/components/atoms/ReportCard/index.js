import React, {useEffect} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Buttons from '../Buttons';
import {Buku8, IcPerson} from '../../../assets';
import Gap from '../Gap';
import {useDispatch} from 'react-redux';
import {Checkout} from '../../../redux/action';
import axios from 'axios';
import {API_HOST} from '../../../config';
import {getData} from '../../../utils';

const ReportCard = ({
  gambar = Buku8,
  id,
  tglkembali,
  tglPinjaman,
  judul,
  pengarang,
  penerbit,
  bookId,
}) => {
  const data = {
    id,
    bookId,
  };

  const dispatch = useDispatch();

  const onSubmit = () => {
    // dispatch(Checkout(data));
    // console.log(data);
    getData('token').then(ress => {
      axios
        .post(`${API_HOST.url}/checkout`, data, {
          headers: {
            Authorization: ress.value,
          },
        })
        .then(ress => {
          console.log('ressponse :', ress);
        })
        .catch(err => {
          console.log('error :', err);
        });
    });
  };

  return (
    <TouchableOpacity style={styles.container}>
      <View>
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
          <Text style={styles.tanggal}>Batas Waktu : {tglkembali}</Text>
          <Gap height={5} />
          <Buttons
            text="Selesai"
            textColor="white"
            color="#38ef7d"
            onPress={onSubmit}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ReportCard;

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
