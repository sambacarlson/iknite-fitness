import React from 'react';
import {Button, StyleSheet, useColorScheme, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Ready from '../components/Ready';
import Rest from '../components/Rest';
import {useAppSelector} from '../store/hooks';

const Exercise = (): JSX.Element => {
  //TODO: Accept category params from overview screen to know which set of exercises to perform here.
  const darkMode = useColorScheme() === 'dark';
  const restState = useAppSelector((state: any) => state.uiControls);
  const [isResting, setIsResting] = React.useState<boolean>(false);

  React.useEffect(() => {
    setIsResting(restState.isResting);
  }, [restState]);

  const [skipReady, setSKipReady] = React.useState(false);
  const retRest = () => {
    setIsResting(true);
  };
  const unsubRest = () => {
    setIsResting(false);
    setSKipReady(true);
  };

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
        {isResting ? <Rest unsubRest={unsubRest} /> : <Ready ret={retRest} skipReady={skipReady} />}
      </View>
      {/* <Button title="setGoing" onPress={() => setIsResting(true)} /> */}
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
