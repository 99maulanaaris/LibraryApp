import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import Cards from '../../atoms/Cards';
import {Buku1, Buku2, Buku3, Buku4} from '../../../assets';
import {useSelector} from 'react-redux';

const BukuBaru = () => {
  const {book} = useSelector(state => state.homeReducer);

  return (
    <ScrollView style={{padding: 20}}>
      {book.map(item => {
        return (
          <Cards
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
    </ScrollView>
  );
};
const Populer = () => {
  const {book} = useSelector(state => state.homeReducer);

  return (
    <ScrollView style={{padding: 20}}>
      {book.map(item => {
        return (
          <Cards
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
    </ScrollView>
  );
};

const Recomended = () => {
  const {book} = useSelector(state => state.homeReducer);

  return (
    <ScrollView style={{padding: 20}}>
      {book.map(item => {
        return (
          <Cards
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
    </ScrollView>
  );
};

const renderScene = SceneMap({
  1: BukuBaru,
  2: Populer,
  3: Recomended,
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
          color: focused ? 'white' : '#8D92A3',
          backgroundColor: '#1abc9c',
          padding: 10,
          fontWeight: 'bold',
          borderRadius: 8,
        }}>
        {route.title}
      </Text>
    )}
  />
);

const BookTabSection = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: '1', title: 'Buku Baru'},
    {key: '2', title: 'Populer'},
    {key: '3', title: 'Recomended'},
  ]);
  return (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
    />
  );
};

export default BookTabSection;

const styles = StyleSheet.create({});
