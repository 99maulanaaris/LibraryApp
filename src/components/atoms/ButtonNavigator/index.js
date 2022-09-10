import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import {
  IcBookOff,
  IcBookOn,
  IcHistoryOff,
  IcHistoryOn,
  IcHomeOff,
  IcHomeOn,
  IcListOff,
  IcListOn,
  IcProfileOff,
  IcProfileOn,
} from '../../../assets';

const Icon = ({label, focus}) => {
  switch (label) {
    case 'Home':
      return focus ? <Image source={IcHomeOn} /> : <Image source={IcHomeOff} />;
    case 'Buku':
      return focus ? <Image source={IcBookOn} /> : <Image source={IcBookOff} />;
    case 'Laporan':
      return focus ? <Image source={IcListOn} /> : <Image source={IcListOff} />;

    case 'Profile':
      return focus ? (
        <Image source={IcProfileOn} />
      ) : (
        <Image source={IcProfileOff} />
      );
    default:
      return <Image source={IcHomeOn} />;
  }
};

const ButtonNavigator = ({state, descriptors, navigation}) => {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({name: route.name, merge: true});
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{flex: 1}}>
            <Icon label={label} focus={isFocused} />
            <Text style={styles.text}>{label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default ButtonNavigator;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingVertical: 8,
    paddingLeft: 45,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    marginTop: 5,
    alignItems: 'center',
    fontSize: 14,
    color: '#020202',
  },
});
