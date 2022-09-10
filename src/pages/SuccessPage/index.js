import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Buttons, Gap} from '../../components';
import {Success} from '../../assets';

const SuccessPage = ({navigation}) => {
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <View style={{marginTop: 100}}>
        <Image source={Success} />
      </View>
      <View style={{marginHorizontal: 50}}>
        <Buttons
          text="Pinjam Lagi"
          color="#423556"
          textColor="white"
          onPress={() => navigation.replace('MainApp', {screen: 'Home'})}
        />
        <Gap height={20} />
        <Buttons
          text="Check Pinjaman"
          textColor="white"
          onPress={() => navigation.replace('MainApp', {screen: 'Laporan'})}
        />
      </View>
      <Text>Page Success</Text>
    </View>
  );
};

export default SuccessPage;

const styles = StyleSheet.create({});
