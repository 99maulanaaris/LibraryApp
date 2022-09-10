import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Buku1} from '../../assets';
import {Buttons, Gap} from '../../components';
import {useDispatch} from 'react-redux';
import {getData} from '../../utils';
import {pinjamBuku} from '../../redux/action';

const DetailBuku = ({route, navigation}) => {
  const {judul, penulis, penerbit, gambar, id, noIsbn, tebalHalaman, stock} =
    route.params;

  const dispatch = useDispatch();

  const onSubmit = () => {
    const data = {
      bookId: id,
    };
    dispatch(pinjamBuku(data, navigation));
    // navigation.navigate('SuccessPage');
  };

  return (
    <View>
      <ImageBackground
        source={{uri: `https://perpusmsp.tech/storage/${gambar}`}}
        style={styles.cover}
      />
      <View
        style={{
          backgroundColor: 'white',
          height: 400,
          paddingHorizontal: 20,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          marginTop: -20,
        }}>
        <View style={{paddingVertical: 10}}>
          <Text style={{color: 'black', fontSize: 16, fontWeight: 'bold'}}>
            Judul Buku <Gap Width={68} /> : {judul}
          </Text>
          <Gap height={10} />
          <Text style={{color: 'black', fontSize: 16, fontWeight: 'bold'}}>
            No Isbn <Gap Width={102} />: {noIsbn}
          </Text>
          <Gap height={10} />
          <Text style={{color: 'black', fontSize: 16, fontWeight: 'bold'}}>
            penulis <Gap Width={106} />: {penulis}
          </Text>
          <Gap height={10} />
          <Text style={{color: 'black', fontSize: 16, fontWeight: 'bold'}}>
            penerbit <Gap Width={98} />: {penerbit}
          </Text>
          <Gap height={10} />
          <Text style={{color: 'black', fontSize: 16, fontWeight: 'bold'}}>
            Jumlah Halaman <Gap Width={33} />: {tebalHalaman}
          </Text>
          <Gap height={10} />
        </View>
        {stock === 1 ? (
          <View>
            <Buttons text="Pinjam Buku" textColor="white" onPress={onSubmit} />
          </View>
        ) : (
          <View>
            <Buttons text="Reservasi" textColor="white" />
          </View>
        )}
      </View>
    </View>
  );
};

export default DetailBuku;

const styles = StyleSheet.create({
  cover: {
    height: 550,
  },
});
