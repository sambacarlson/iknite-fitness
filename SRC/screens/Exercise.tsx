import React from 'react';
import {StyleSheet, Text, useColorScheme, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Ready from '../components/Ready';
import Rest from '../components/Rest';

const Exercise = (): JSX.Element => {
  const darkMode = useColorScheme() === 'dark';
  const [resting, setResting] = React.useState<boolean>(false);
  const [ready, setReady] = React.useState<boolean>(true);
  return (
    <View
      style={[
        styles.Container,
        {backgroundColor: darkMode ? Colors.dark : Colors.light},
      ]}>
      <View
        style={{
          width: '100%',
          height: '100%',
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        {resting && <Rest />}
        {ready && <Ready />}
      </View>
    </View>
  );
};

export default Exercise;

const styles = StyleSheet.create({
  Container: {
    width: '100%',
    height: '100%',
    alignContent: 'center',
    justifyContent: 'center',
  },
});
