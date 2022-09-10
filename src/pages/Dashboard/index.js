import React, {useEffect, useState} from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {IcRead} from '../../assets';
import {Buttons, Card, Cards, Gap} from '../../components';
import {getDataBook} from '../../redux/action';
import {getData} from '../../utils';
const Dashboard = ({navigation}) => {
  const {book} = useSelector(state => state.homeReducer);
  const [profile, setProfile] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDataBook());
    getData('userProfile').then(ress => {
      setProfile(ress);
    });
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.user}>
        <View>
          <Text style={styles.Uselamat}>Selamat Datang</Text>
          <Text style={styles.Unama}> {profile.nama} </Text>
        </View>
      </View>
      <Image
        source={IcRead}
        style={{
          height: 180,
          width: 330,
          marginHorizontal: 30,
        }}
      />
      <ScrollView
        horizontal
        style={{flex: 2, marginVertical: 20, marginVertical: 8}}>
        {book.map(item => {
          return (
            <Card
              key={item.id}
              gambar={{
                uri: `https://perpusmsp.tech/storage/${item.gambar}`,
              }}
              onPress={() => navigation.navigate('DetailBuku', item)}
            />
          );
        })}
      </ScrollView>
      <Gap height={20} />
      <View style={{flex: 2, marginHorizontal: 10}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: -20,
            padding: 5,
          }}>
          <Text style={{color: '#020202', fontSize: 16, fontWeight: 'bold'}}>
            Koleksi Buku
          </Text>
          <Buttons text="Lihat Semua   >" textColor="white" />
        </View>
        <Gap height={10} />
        <ScrollView
          style={{
            padding: 5,
            borderRadius: 15,
          }}>
          <View>
            {book.map(item => {
              return (
                <Cards
                  onPress={() => navigation.navigate('DetailBuku', item)}
                  key={item.id}
                  gambar={{
                    uri: `https://perpusmsp.tech/storage/${item.gambar}`,
                  }}
                  judul={item.judul}
                  pengarang={item.penulis}
                  penerbit={item.penerbit}
                />
              );
            })}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  user: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 20,
  },
  Uselamat: {
    fontWeight: '500',
    color: '#23313f',
    fontSize: 26,
  },
  Unama: {
    color: '#23313f',
    fontStyle: 'italic',
    fontSize: 14,
  },
  profile: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
    padding: 5,
    borderRadius: 100,
  },
});
