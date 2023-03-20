import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {setIsResting} from '../slices/uiControlSlice';
import {useAppDispatch, useAppSelector} from '../store/hooks';
import {variables} from '../variables/global';

//variables
const exerciseImg = {
  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkff67hRNN4RFZrlWEeRTK_tinV_69uL0sNA&usqp=CAU',
};
const fonts = variables.fonts;
const customColors = variables.colors;

const Ready = (props: any) => {
  // const restState = useAppSelector(state => state.uiControls);
  const [pauseMusic, setPauseMusic] = React.useState<boolean>(true);
  const [going, setGoing] = React.useState<boolean>(false); //determines whether exercising or resting
  const [readyCountDown, setReadyCountDown] = React.useState<number>(10); //countDown before exercise begins
  const [goingCountdown, setGoingCountDown] = React.useState<number>(15); //counddown while exercising
  const [exercising, setExercising] = React.useState<boolean>(true); ///stops exercution if false

  const dispatch = useAppDispatch();

  React.useState(() => {
    setExercising(false);
  }, []);
  // ============
  //controls switcher from 'ready' to 'go'
  const isGoingFxn = async () => {
    await setTimeout(() => {
      setGoing(true);
    }, 11500);
  };

  //reders countdown to begin exercise 1
  React.useEffect(() => {
    if (props.skipReady) {
      setGoing(true);
    }
    if (!exercising) {
      return;
    }
    setTimeout(() => {
      if (readyCountDown >= 0) {
        // console.log(readyCountDown);
        setReadyCountDown(prevState => prevState - 1);
      }
    }, 1000);
    isGoingFxn();
  }, [readyCountDown]);

  // ============
  // countdown on current exercising task
  const exercisingFxn = async () => {
    await setTimeout(() => {
      if (goingCountdown >= 0) {
        // setGoingCountDown(prevState => prevState - 1);
        props.ret();
      }
    }, goingCountdown * 1000);
  };

  //rendering current exercising countdown
  React.useEffect(() => {
    if (going && exercising) {
      setTimeout(() => {
        if (goingCountdown > 0) {
          setGoingCountDown(prevState => prevState - 1);
        }
      }, 1000);
      exercisingFxn();
      // dispatch(setIsResting(true));
      // props.ret();
    }
  }, [goingCountdown, going]);

  // ==============
  return (
    <View style={styles.Container}>
      <View style={styles.TopRow}>
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
          <Icon name={pauseMusic ? 'pause' : 'play'} size={20} />
          <Icon name="forward" size={20} />
        </View>
      </View>
      <View
        style={{
          flex: 3,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image source={exerciseImg} style={styles.ExerciseImage} />
      </View>

      <View
        style={{
          flex: 5,
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {
          /* ================
          READY TO GO. will be rendered when about to start exercise
      */
          !going && (
            <View style={{alignItems: 'center'}}>
              <Text
                style={[fonts.bigTitles, {color: customColors.primaryLight}]}>
                Ready to go!
              </Text>
              <Text style={[fonts.mediumTitles]}>Jumping Jacks</Text>
              <View
                style={{
                  marginTop: 10,
                }}>
                <View style={{flexDirection: 'row', alignItems: 'flex-start'}}>
                  <Text
                    style={[
                      fonts.bigTitles,
                      {color: customColors.primaryLight, fontSize: 72},
                    ]}>
                    {readyCountDown}
                  </Text>
                  <Text style={{fontSize: 24, fontWeight: 'bold'}}>s</Text>
                </View>
              </View>
            </View>
          )
        }
        {going && (
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              paddingBottom: 60,
              height: '100%',
              width: '100%',
            }}>
            <Text
              style={[
                fonts.bigTitles,
                {color: customColors.primaryLight, fontSize: 72},
              ]}>
              {goingCountdown}
            </Text>
            <Text style={[fonts.mediumTitles]}>Jumping Jacks</Text>
            <View
              style={{
                position: 'absolute',
                bottom: 0,
                backgroundColor: customColors.primaryLighter,
                width: '100%',
                height: '20%',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-around',
                borderRightWidth: 8,
                borderLeftWidth: 8,
                borderColor: customColors.primaryLight,
              }}>
              <View style={{width: 20}} />
              <Icon name="pause" size={28} />
              <Icon name="chevron-right" size={20} />
            </View>
          </View>
        )}
      </View>
    </View>
  );
};

export default Ready;

const styles = StyleSheet.create({
  Container: {
    width: '100%',
    paddingHorizontal: 12,
  },
  ExerciseImage: {
    height: '90%',
    width: '90%',
    resizeMode: 'cover',
  },
  TopRow: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
