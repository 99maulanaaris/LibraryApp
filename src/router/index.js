import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {ButtonNavigator} from '../components';
import {
  Buku,
  Dashboard,
  DetailBuku,
  EditProfile,
  History,
  Laporan,
  Login,
  Profile,
  SignUp,
  SplashScreen,
  SuccessPage,
  Welcome,
} from '../pages';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={props => <ButtonNavigator {...props} />}>
      <Tab.Screen
        name="Home"
        component={Dashboard}
        options={{headerShown: false}}
      />

      <Tab.Screen name="Buku" component={Buku} options={{headerShown: false}} />

      <Tab.Screen
        name="Laporan"
        component={Laporan}
        options={{headerShown: false}}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DetailBuku"
        component={DetailBuku}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SuccessPage"
        component={SuccessPage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
