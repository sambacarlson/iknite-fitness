/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Pressable, StyleSheet, Text, useColorScheme, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Going from '../components/Going';
import Ready from '../components/Ready';
import Rest from '../components/Rest';
import {GoingProp, ReadyProp, RestProp} from '../props';
import {useAppSelector} from '../store/hooks';

//============INITIAL_VARIABLES==============
const restData: RestProp = {
  restTimeOut: 10,
  exCount: 14,
  nextExercise: {
    exNumber: 1,
    exTitle: 'exerciseTitle',
    exDuration: 12,
  },
};

const goingData: GoingProp = {
  exDuration: 7,
  exTitle: 'exerciseTitle',
};

const readyData: ReadyProp = {
  readyDuration: 9,
  exTitle: 'Next on line',
};
//========================================

const Exercise = (): JSX.Element => {
  //TODO: Accept category params from overview screen to know which set of exercises to perform here.
  const darkMode = useColorScheme() === 'dark';
  const uiControls = useAppSelector(state => state.uiControls);

  // ---------UI control useState hooks------------
  const [pauseMusic, setPauseMusic] = React.useState<boolean>(false);

  //----------Logic control useState hooks----------
  const [showReady, setShowReady] = React.useState<boolean>(true);
  const [readyState, setReadyState] = React.useState<ReadyProp>(readyData);
  const [restState, setRestState] = React.useState<RestProp>(restData); //sends data to Rest
  const [goingState, setUsingState] = React.useState<GoingProp>(goingData); //sends data to doing


  /* =============RETURN================ */
  return (
    <View
      style={[
        styles.Container,
        {backgroundColor: darkMode ? Colors.dark : Colors.light},
      ]}>
      <View style={styles.TopMusicPlayer}>
        <View
          style={{flexDirection: 'row', columnGap: 8, alignItems: 'center'}}>
          <View>
            <Icon name="music" size={30} />
          </View>
          <Text style={{textDecorationLine: 'underline'}}>Choose Song</Text>
        </View>
        <View
          style={{flexDirection: 'row', columnGap: 24, alignItems: 'center'}}>
          <Icon name="backward" size={20} />
          <Pressable onPress={() => setPauseMusic(prev => !prev)}>
            <Icon name={pauseMusic ? 'pause' : 'play'} size={20} />
          </Pressable>
          <Icon name="forward" size={20} />
        </View>
      </View>
      <View
        style={{
          flex: 10,
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        {uiControls.isResting ? (
          <Rest {...restState} />
        ) : (
          <Ready {...readyState} />
          // <Going {...goingState} />
        )}
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
  TopMusicPlayer: {
    flex: 1,
    // position: 'absolute',
    // top: 0,
    width: '100%',
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
