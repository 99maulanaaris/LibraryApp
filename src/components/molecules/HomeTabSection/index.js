import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {Buku1, Buku2, Buku3, Buku4} from '../../../assets';
import Card from '../Card';

const BukuBaru = () => {
  return (
    <ScrollView horizontal style={{padding: 10}}>
      <Card gambar={Buku1} />
      <Card gambar={Buku2} />
      <Card gambar={Buku3} />
      <Card gambar={Buku1} />
      <Card gambar={Buku2} />
      <Card gambar={Buku4} />
    </ScrollView>
  );
};
const Populer = () => {
  return (
    <ScrollView horizontal style={{padding: 10}}>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </ScrollView>
  );
};

const Recomended = () => <View style={{flex: 1, backgroundColor: '#673ab7'}} />;

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

const HomeTabSection = () => {
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

export default HomeTabSection;

const styles = StyleSheet.create({});
