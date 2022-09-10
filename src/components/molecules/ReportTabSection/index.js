import React, {useEffect} from 'react';
import {ScrollView, StyleSheet, Text, useWindowDimensions} from 'react-native';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import {useDispatch, useSelector} from 'react-redux';
import {
  getDataKembali,
  getDataPinjaman,
  getHistory,
  getTelat,
} from '../../../redux/action';
import ReportCard from '../../atoms/ReportCard';
import HistoryCard from '../HistoryCard';
import Kembali from '../Kembali';
import TelatCard from '../TelatCard';

const Pinjaman = () => {
  const {book} = useSelector(state => state.laporanReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDataPinjaman());
  }, []);
  return (
    <ScrollView style={{padding: 20}}>
      {book.map(item => {
        return (
          <ReportCard
            bookId={item['book'].id}
            id={item.id}
            key={item.id}
            judul={item['book'].judul}
            gambar={{
              uri: `https://perpusmsp.tech/storage/${item['book'].gambar}`,
            }}
            tglPinjaman={item.pinjam}
            tglkembali={item.kembali}
            pengarang={item['book'].penulis}
            penerbit={item['book'].penerbit}
          />
        );
      })}
    </ScrollView>
  );
};
const Pengembalian = () => {
  const {kembali} = useSelector(state => state.laporanReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDataKembali());
  }, []);
  return (
    <ScrollView style={{padding: 10}}>
      {kembali.map(item => {
        return (
          <Kembali
            judul={item['book'].judul}
            key={item.id}
            tglKembali={item.tglKembali}
            tglPinjam={item['loan'].pinjam}
            confirmation={item.konfirmasi}
          />
        );
      })}
    </ScrollView>
  );
};

const Telat = () => {
  const {telat} = useSelector(state => state.laporanReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTelat());
  }, []);
  return (
    <ScrollView style={{padding: 10}}>
      {telat.map(item => {
        return (
          <TelatCard
            key={item.id}
            gambar={{
              uri: `https://perpusmsp.tech/storage/${item['book'].gambar}`,
            }}
            judul={item['book'].judul}
            pinjam={item.pinjam}
            kembali={item.kembali}
          />
        );
      })}
    </ScrollView>
  );
};
const Histories = () => {
  const {history} = useSelector(state => state.laporanReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHistory());
  }, []);
  return (
    <ScrollView style={{padding: 10}}>
      {history.map(item => {
        return (
          <HistoryCard
            id={item.id}
            key={item.id}
            judul={item['book'].judul}
            gambar={{
              uri: `https://perpusmsp.tech/storage/${item['book'].gambar}`,
            }}
            tglPinjaman={item.tglPinjam}
            tglkembali={item.tglKembali}
            batasWaktu={item.batasWaktu}
            pengarang={item['book'].penulis}
            penerbit={item['book'].penerbit}
          />
        );
      })}
    </ScrollView>
  );
};

const renderScene = SceneMap({
  1: Pinjaman,
  2: Pengembalian,
  3: Telat,
  4: Histories,
});

const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={{
      backgroundColor: '#23313f',
      height: 3,
      width: 0.2,
    }}
    tabStyle={{width: 'auto'}}
    style={{backgroundColor: 'white'}}
    renderLabel={({route, focused, color}) => (
      <Text
        style={{
          color: focused ? 'black' : '#8D92A3',
          backgroundColor: 'white',
          padding: 10,
          fontWeight: 'bold',
          borderRadius: 8,
        }}>
        {route.title}
      </Text>
    )}
  />
);

const ReportTabSection = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: '1', title: 'Pinjaman'},
    {key: '2', title: 'Kembali'},
    {key: '3', title: 'Telat'},
    {key: '4', title: 'History'},
  ]);
  return (
    <TabView
      key={index}
      renderTabBar={renderTabBar}
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
    />
  );
};

export default ReportTabSection;

const styles = StyleSheet.create({});
