import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import ItemListProfile from '../ItemListProfile';
import {Buku1, Buku2, Buku3, Buku4} from '../../../assets';
import Card from '../Card';
import {useNavigation} from '@react-navigation/native';

const Account = () => {
  const navigation = useNavigation();
  return (
    <View style={{padding: 10, backgroundColor: 'white'}}>
      <ItemListProfile
        text="Edit Profile"
        onPress={() => navigation.navigate('EditProfile')}
      />
      <ItemListProfile text="Security" />
    </View>
  );
};
const Information = () => {
  return (
    <View style={{padding: 10, backgroundColor: 'white'}}>
      <ItemListProfile />
      <ItemListProfile />
      <ItemListProfile />
      <ItemListProfile />
    </View>
  );
};

const renderScene = SceneMap({
  1: Account,
  2: Information,
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
          color: focused ? '#020202' : '#8D92A3',
          padding: 10,
          fontWeight: 'bold',
          borderRadius: 8,
        }}>
        {route.title}
      </Text>
    )}
  />
);

const ProfileTabSection = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: '1', title: 'Account'},
    {key: '2', title: 'Informasi'},
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

export default ProfileTabSection;

const styles = StyleSheet.create({});
