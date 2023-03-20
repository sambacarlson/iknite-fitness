import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {View, Text, Pressable, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {variables} from '../variables/global';

const customColors = variables.colors;

const fonts = variables.fonts;
const Rest = (props: any) => {
  const darkMode = useColorScheme() === 'dark';
  // const nextImg = require('../assets/arm_stretch.jpg');
  const nextImg = {
    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTluoy4oMHk1FsaKTbF3SxjppFOxJUH_EY5cQ&usqp=CAU',
  };
  const [restTime, setRestTime] = React.useState(10);

  //Rest countDown settings,
  const countDown = async () => {
    await setTimeout(() => {
      if (restTime > 0) {
        setRestTime(prevState => prevState - 1);
      }
    }, 1000);
  };
  React.useEffect(() => {
    countDown();
    if(restTime==0) {
      props.unsubRest();
    }
  }, [restTime]);

  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%',
      }}>
      <Text
        style={[
          fonts.bigTitles,
          {color: darkMode ? Colors.light : Colors.dark},
        ]}>
        REST
      </Text>
      <Text style={{color: customColors.primaryLight, fontSize: 30}}>
        00:{restTime}
      </Text>
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          marginTop: 30,
          alignItems: 'center',
          justifyContent: 'center',
          columnGap: 60,
        }}>
        <Pressable style={styles.Btn}>
          <Text>+20s</Text>
        </Pressable>
        <Pressable style={styles.Btn}>
          <Text>skip</Text>
        </Pressable>
      </View>
      <View
        style={[
          styles.Bottombar,
          {
            backgroundColor: darkMode
              ? Colors.darker
              : customColors.primaryLighter,
          },
        ]}>
        <View style={styles.LeftContainer}>
          <Text>NEXT 4/14</Text>
          <Text
            style={[
              fonts.mediumTitles,
              {
                color: customColors.primaryLight,
              },
            ]}>
            CALF STRETCH RIGHT
          </Text>
          <Text>00:20</Text>
        </View>
        <View style={styles.NextImg}>
          <Image
            source={nextImg}
            style={{width: '100%', height: '100%', resizeMode: 'cover'}}
          />
        </View>
      </View>
    </View>
  );
};

export default Rest;

const styles = StyleSheet.create({
  Btn: {
    borderWidth: 1,
    borderColor: customColors.primaryLighter,
    borderRadius: 20,
    paddingHorizontal: 25,
    paddingVertical: 5,
  },
  Bottombar: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '20%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
  },
  NextImg: {
    // width: '30%',
    height: '100%',
    flex: 1,
  },
  LeftContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    rowGap: 3,
    flex: 3,
    height: '100%',
  },
});
