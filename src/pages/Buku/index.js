import React, {useEffect, useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {IcCari, IcTas} from '../../assets';
import {BookTabSection, Card, Gap, HomeTabSection} from '../../components';
import {getDataBook} from '../../redux/action';

const Buku = ({navigation}) => {
  const {book} = useSelector(state => state.homeReducer);
  const [search, setSearch] = useState('');
  const [hasil, setHasil] = useState(book);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDataBook());
  }, []);
  const pencarian = () => {
    const data = book;
    const hasil = data.filter(item =>
      item.judul.toLowerCase().includes(search.toLowerCase()),
    );
    if (hasil) {
      setHasil(hasil);
    } else {
      setHasil(book);
    }
  };

  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-end',
          alignItems: 'center',
          padding: 20,
          backgroundColor: '#8EFFF5',
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
        }}>
        <TextInput
          style={{
            flex: 1,
            color: '#000000',
            borderWidth: 1,
            borderColor: '#23313f',
            backgroundColor: '#ffffff',
            padding: 10,
            borderRadius: 20,
          }}
          value={search}
          onChangeText={value => setSearch(value)}
          placeholder="Cari Buku"
        />
        <TouchableOpacity onPress={pencarian}>
          <Image source={IcCari} style={{marginHorizontal: 20}} />
        </TouchableOpacity>
        <Image source={IcTas} />
      </View>
      <Gap height={10} />
      <Text
        style={{
          color: 'black',
          marginLeft: 20,
          fontSize: 16,
          fontWeight: 'bold',
          marginBottom: 10,
        }}>
        Koleksi Buku
      </Text>

      {search ? (
        <ScrollView>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              paddingHorizontal: 10,
            }}>
            {hasil.map(item => {
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
          </View>
        </ScrollView>
      ) : (
        <ScrollView>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              paddingHorizontal: 10,
            }}>
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
          </View>
        </ScrollView>
      )}
    </View>
  );
};

export default Buku;

const styles = StyleSheet.create({});
