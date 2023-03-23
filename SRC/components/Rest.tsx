import React from 'react';
import RNSystemSounds from '@dashdoc/react-native-system-sounds';
import {Image, StyleSheet} from 'react-native';
import {View, Text, Pressable, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {RestProp} from '../props';
import {rn_beeps, variables} from '../variables/global';

//variables
const customColors = variables.colors;
const fonts = variables.fonts;

//-------------------------------------
const Rest = (props: RestProp) => {
  const darkMode = useColorScheme() === 'dark';
  const nextImg = {
    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTluoy4oMHk1FsaKTbF3SxjppFOxJUH_EY5cQ&usqp=CAU',
  };
  //---------------------------------------------
  const [restCount, setRestCount] = React.useState(props.restTimeOut);
  // -----------------------------------------------------------------------
  React.useEffect(() => {
    if (restCount > 0) {
      setTimeout(() => {
        setRestCount(prevCount => prevCount - 1);
      }, 1000);
    } else {
      setTimeout(() => {
        props.unsub();
      }, 1000);
    }
  }, [restCount]);

  // play sounds
  rn_beeps(restCount);

  // -----------------------------------------------------------------------

  /* =========RETURN========= */
  return (
    <View style={styles.RestContainer}>
      <View style={styles.RestBody}>
        <Text
          style={[
            fonts.bigTitles,
            {color: darkMode ? Colors.light : Colors.dark},
          ]}>
          REST
        </Text>
        <Text style={styles.CountDownTime}>0:{restCount}</Text>
        <View style={styles.ModifyRestButtons}>
          <Pressable style={styles.Btn}>
            <Text>+20s</Text>
          </Pressable>
          <Pressable style={styles.Btn}>
            <Text>skip</Text>
          </Pressable>
        </View>
      </View>
      <View
        style={[
          styles.BottomNextItemBar,
          {
            backgroundColor: darkMode
              ? Colors.darker
              : customColors.primaryLighter,
          },
        ]}>
        <View style={styles.LeftContainer}>
          <Text>
            NEXT {props.nextExercise.exNumber}/{props.exCount}
          </Text>
          <Text
            style={[
              fonts.mediumTitles,
              {
                color: customColors.primaryLight,
              },
            ]}>
            {props.nextExercise.exTitle} {/*=========================*/}
          </Text>
          <Text>
            0:{props.nextExercise.exDuration} {/*=================*/}
          </Text>
        </View>
        <View style={styles.NextImgContainer}>
          <Image source={nextImg} style={styles.NextImg} />
        </View>
      </View>
    </View>
  );
};

export default Rest;

const styles = StyleSheet.create({
  RestContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    marginBottom: 300,
  },
  RestBody: {
    padding: 16,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 4,
  },
  ModifyRestButtons: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
    columnGap: 40,
  },
  Btn: {
    borderWidth: 2,
    borderColor: customColors.primaryLighter,
    borderRadius: 20,
    paddingHorizontal: 25,
    paddingVertical: 5,
  },
  BottomNextItemBar: {
    // position: 'absolute',
    // bottom: 0,
    width: '100%',
    // height: '20%',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
  },
  NextImgContainer: {
    height: '100%',
    flex: 1,
  },
  NextImg: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  LeftContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    rowGap: 3,
    flex: 3,
    height: '100%',
  },
  CountDownTime: {
    color: customColors.primaryLight,
    fontSize: 30,
  },
});
