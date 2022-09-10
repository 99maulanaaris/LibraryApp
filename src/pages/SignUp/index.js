import React from 'react';
import {Image, StyleSheet, Text, View, ScrollView} from 'react-native';
import {IcLock, IcPerson, IcRegister, Logo} from '../../assets';
import {Buttons, Gap, TextInput} from '../../components';
import {useDispatch, useSelector} from 'react-redux';
import {showMessage, useForm} from '../../utils';
import axios from 'axios';
import {setLoading, SignUpAction} from '../../redux/action';

const SignUp = ({navigation}) => {
  const globalState = useSelector(state => state.globalReducer);
  const registerReducer = useSelector(state => state.registerReducer);

  const [form, setForm] = useForm({
    nama: '',
    email: '',
    password: '',
  });

  const dispatch = useDispatch();

  const onSubmit = () => {
    const data = {
      ...form,
    };
    dispatch(setLoading(true));
    dispatch(SignUpAction(data, navigation));
    // axios
    //   .post('https://perpusmsp.tech/api/register', data)
    //   .then(ress => {
    //     console.log('data', data);
    //     dispatch(setLoading(false));
    //     showMessage('Register Berhasil', 'success');
    //     navigation.replace('MainApp');
    //   })
    //   .catch(err => {
    //     showMessage('Gagal Register');
    //     dispatch(setLoading(false));
    //     console.log('error:', err);
    //   });
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          marginTop: 20,
          marginLeft: 50,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View>
          <Text style={styles.label}>Selamat Datang!!</Text>
          <Text style={styles.title}>Harap Isi Semua Form</Text>
        </View>
        <Image source={Logo} style={{height: 80, width: 80, marginRight: 40}} />
      </View>
      <ScrollView style={styles.wrapper}>
        <Image source={IcRegister} />
        <Gap height={20} />
        <TextInput
          gambar={IcPerson}
          value={form.nama}
          onChangeText={value => setForm('nama', value)}
        />
        <Gap height={20} />
        <TextInput
          value={form.email}
          onChangeText={value => setForm('email', value)}
        />
        <Gap height={20} />
        <TextInput
          gambar={IcLock}
          value={form.password}
          secureTextEntry
          onChangeText={value => setForm('password', value)}
        />
        <Gap height={20} />
        <Buttons text="Daftar" onPress={onSubmit} />
      </ScrollView>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  wrapper: {
    marginVertical: 60,
    marginHorizontal: 20,
  },
  label: {
    color: '#23313f',
    fontSize: 19,
    fontWeight: 'bold',
  },
  title: {
    color: '#23313f',
    fontSize: 14,
    fontStyle: 'italic',
  },
});
