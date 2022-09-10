import {StyleSheet, Text, View, Image, TextInput} from 'react-native';
import React, {useEffect, useState} from 'react';
import {ProfileDummy} from '../../assets';
import {getData, showMessage, useForm} from '../../utils';
import {Buttons, Gap} from '../../components';
import axios from 'axios';
import {API_HOST} from '../../config';

const EditProfile = ({navigation}) => {
  const [profile, setProfile] = useState({
    nama: '',
    email: '',
    indentitas: '',
    alamat: '',
    noHp: '',
  });

  useEffect(() => {
    getData('userProfile').then(ress => {
      setProfile(ress);
    });
  }, []);

  const updateProfile = () => {
    getData('token').then(ress => {
      axios
        .post(`${API_HOST.url}/user`, profile, {
          headers: {
            Authorization: ress.value,
          },
        })
        .then(ress => {
          showMessage('Profile Updated !!!', 'success');
          console.log('profile :', ress.data);
        })
        .catch(err => {
          showMessage('Gagal Update Profile');
          console.log('err:', err);
        });
    });
    // console.log('profile :', profile);
  };

  const ChangeText = (key, value) => {
    setProfile({
      ...profile,
      [key]: value,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.photo}>
        <View>
          <View style={styles.borderPhoto}>
            <Image source={ProfileDummy} style={styles.photoContainer} />
          </View>
        </View>
      </View>
      <Text style={styles.name}>{profile.nama}</Text>
      <Text style={styles.email}>{profile.email}</Text>
      <Text>Edit Profile Page</Text>
      <View style={{marginHorizontal: 20}}>
        <View>
          <Text style={{color: 'black'}}>No Identitas</Text>
          <TextInput
            style={{
              borderBottomWidth: 1,
              borderColor: '#020202',
              color: 'black',
            }}
            value={profile.indentitas}
            onChangeText={value => ChangeText('indentitas', value)}
            placeholder="Isi No Identitas"
          />
        </View>
        <Gap height={10} />
        <View>
          <Text style={{color: 'black'}}>Alamat</Text>
          <TextInput
            style={{
              borderBottomWidth: 1,
              borderColor: '#020202',
              color: 'black',
            }}
            value={profile.alamat}
            onChangeText={value => ChangeText('alamat', value)}
            placeholder="Isi No Identitas"
          />
        </View>
        <Gap height={10} />
        <View>
          <Text style={{color: 'black'}}>No Hp</Text>
          <TextInput
            style={{
              borderBottomWidth: 1,
              borderColor: '#020202',
              color: 'black',
            }}
            value={profile.noHp}
            onChangeText={value => ChangeText('noHp', value)}
            placeholder="Isi No Identitas"
          />
        </View>
        <Gap height={10} />
      </View>
      <View style={{alignItems: 'center'}}>
        <Buttons
          text="Simpan"
          textColor="white"
          width={200}
          onPress={updateProfile}
        />
        <Gap height={10} />
        <Buttons
          text="Home"
          textColor="white"
          width={200}
          color="#020202"
          onPress={() => navigation.navigate('MainApp', {screen: 'Home'})}
        />
      </View>
    </View>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white'},
  name: {fontSize: 18, color: '#020202', textAlign: 'center'},
  email: {fontSize: 13, color: '#8D92A3', textAlign: 'center'},
  photo: {
    alignItems: 'center',
    marginTop: 26,
    marginBottom: 16,
  },
  borderPhoto: {
    borderWidth: 1,
    borderColor: '#8D92A3',
    width: 110,
    height: 110,
    borderRadius: 110,
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
  },
  photoContainer: {
    width: 90,
    height: 90,
    borderRadius: 90,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addPhoto: {
    fontSize: 14,
    color: '#8d92a3',
    textAlign: 'center',
  },
});
