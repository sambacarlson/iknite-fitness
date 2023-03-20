/**
 * CUSTOMIZED LIST ITEM FOR EVERY ITEM IN OVERVIEW SCREEN
 */
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {View, Text, StyleSheet, Pressable, Image} from 'react-native';
import {RootStackParams} from '../App';
import {overviewProp} from '../screens/Overview';
import {setCurrentExID} from '../slices/uiControlSlice';
import {useAppDispatch} from '../store/hooks';
import {useAppSelector} from '../store/store';
import {variables} from '../variables/global';

//variables
const fonts = variables.fonts;
const exImage = {
  uri: 'https://cdn.pixabay.com/photo/2017/02/01/11/02/boy-2029661_960_720.png',
};

const ExerciseListItem = (props: overviewProp): JSX.Element => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const dispatch = useAppDispatch();

  return (
    <Pressable
      onPress={() => {
        dispatch(setCurrentExID(props.exID));
        props.visibleDesc();
      }}
      style={[styles.Container]}>
      <View style={styles.LeftColumn}>
        <Text style={fonts.mediumTitles}>{props.exTitle}</Text>
        <Text style={{fontWeight: 'bold'}}>{props.exDuraction} Seconds</Text>
      </View>
      <View style={styles.ImageContainer}>
        <Image source={exImage} resizeMode="contain" style={styles.Image} />
      </View>
    </Pressable>
  );
};

export default ExerciseListItem;

const styles = StyleSheet.create({
  Container: {
    height: '100%',
    paddingVertical: 4,
    paddingHorizontal: 10,
    flexDirection: 'row',
    columnGap: 3,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  ImageContainer: {
    flex: 1,
    height: '100%',
  },
  Image: {
    width: '100%',
    height: '100%',
  },
  LeftColumn: {
    paddingHorizontal: 5,
    height: '100%',
    flex: 3,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
  },
});
