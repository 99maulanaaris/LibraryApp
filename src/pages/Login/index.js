import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {IcBg1, IcLock, Logo} from '../../assets';
import {Buttons, Gap, TextInput} from '../../components';
import {LoginAction} from '../../redux/action';
import {useForm} from '../../utils';

const Login = ({navigation}) => {
  const [form, setForm] = useForm({
    email: '',
    password: '',
  });

  const dispatch = useDispatch();

  const onSubmit = () => {
    dispatch(LoginAction(form, navigation));
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
      <View style={styles.wrapper}>
        <Image source={IcBg1} />
        <Gap height={20} />
        <TextInput
          value={form.email}
          onChangeText={value => setForm('email', value)}
        />
        <Gap height={20} />
        <TextInput
          gambar={IcLock}
          value={form.password}
          onChangeText={value => setForm('password', value)}
          secureTextEntry
        />
        <Gap height={20} />
        <Buttons text="LOGIN" onPress={onSubmit} />
        <Gap height={20} />
        <Buttons
          color="#23313f"
          textColor="white"
          text="BUAT ACCOUNT"
          onPress={() => navigation.navigate('SignUp')}
        />
      </View>
    </View>
  );
};

export default Login;

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
