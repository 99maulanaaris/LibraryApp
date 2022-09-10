import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Buttons, ProfileTabSection} from '../../components';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ProfileDummy} from '../../assets';
import {getData, showMessage} from '../../utils';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const Profile = ({navigation}) => {
  const [profile, setProfile] = useState({});
  const [photo, setPhoto] = useState('');

  getData('userProfile').then(ress => {
    setProfile(ress);
  });

  // const addPhoto = () => {
  //   launchImageLibrary(
  //     {quality: 0.5, maxWidth: 200, maxHeight: 200},
  //     response => {
  //       console.log(response);
  //       if (response.didCancel || response.errorCode) {
  //         showMessage('Anda Tidak Mengupload Photo');
  //       } else {
  //         const source = {uri: response.uri};
  //         const dataImage = {
  //           uri: response.uri,
  //           type: response.type,
  //           name: response.fileName,
  //         };

  //         setPhoto(source);
  //       }
  //     },
  //   );
  // };

  const signOut = () => {
    AsyncStorage.multiRemove(['userProfile', 'token']).then(() => {
      navigation.reset({index: 0, routes: [{name: 'Login'}]});
    });
  };

  return (
    <View style={styles.container}>
      <View style={{backgroundColor: 'white', paddingBottom: 26}}>
        <View style={styles.photo}>
          <TouchableOpacity>
            <View style={styles.borderPhoto}>
              <Image source={ProfileDummy} style={styles.photoContainer} />
            </View>
          </TouchableOpacity>
        </View>
        <Text style={styles.name}>{profile.nama}</Text>
        <Text style={styles.email}>{profile.email}</Text>
      </View>
      <View style={{flex: 1, marginTop: 24}}>
        <ProfileTabSection />
      </View>
      <View style={{flex: 2, alignItems: 'center'}}>
        <Buttons
          text="Log Out"
          width={200}
          textColor="white"
          onPress={signOut}
        />
      </View>
    </View>
  );
};

export default Profile;

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
