import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {IcRead} from '../../assets';
import {Buttons, Gap} from '../../components';

const Welcome = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={{marginTop: 120}}>
        <Image source={IcRead} />
        <Gap height={20} />
        <Text style={styles.label}>Welcome !!!</Text>
        <Text style={styles.title}>
          Di Aplikasi Perpustakaan Museum Sumpah Pemuda
        </Text>
        <Text style={styles.title}>Harap Pilih Menu Di Bawah Ini</Text>
        <Gap height={20} />
        <View style={styles.wrapperButton}>
          <Gap height={20} />
          <Buttons
            text="LOGIN"
            width={120}
            onPress={() => navigation.replace('Login')}
          />
          <Buttons
            text="DAFTAR ACCOUNT"
            color="#23313f"
            textColor="white"
            onPress={() => navigation.replace('SignUp')}
          />
        </View>
      </View>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {backgroundColor: 'white', flex: 1},
  label: {
    color: '#23313f',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  title: {
    color: 'grey',
    fontSize: 14,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  wrapperButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 50,
  },
});
