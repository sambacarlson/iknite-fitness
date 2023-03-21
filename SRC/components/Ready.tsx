/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {exercises} from '../exercise';
import {ReadyProp} from '../props';
import {setHideReady} from '../slices/uiControlSlice';
import {useAppDispatch, useAppSelector} from '../store/hooks';
import {variables} from '../variables/global';

//variables
// const selectedExercises = exercises.map(exercise => {});

const fonts = variables.fonts;
const customColors = variables.colors;

const Ready = (props: ReadyProp) => {
  const dispatch = useAppDispatch();

  //current exerciseObj returns a single object of exercise for current exericise ID
  // const exerciseObj = exercises.filter(item => {
  //   return item.exID === props.currentExID;
  // })[0];

  // -----------------------------------------------------------------------
  // -----------------------------------------------------------------------
  // const [readyToGo, setReadyToGo] = React.useState<number>(10);
  // const [onExercise, setOnExercise] = React.useState<number>(
  //   exerciseObj.exDuration,
  // );
  // -----------------------------------------------------------------------
  // -----------------------------------------------------------------------

  /* ==========RETURN============ */
  return (
    <View style={styles.ReadyContainer}>
      <Text style={[fonts.bigTitles, {color: customColors.primaryLight}]}>
        Ready to go!
      </Text>
      <Text style={[fonts.mediumTitles]}>{props.exTitle}</Text>
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
            {props.readyDuration} {/* =========================== */}
          </Text>
          <Text style={{fontSize: 24, fontWeight: 'bold'}}>s</Text>
        </View>
      </View>
    </View>
  );
};

export default Ready;

const styles = StyleSheet.create({
  ReadyContainer: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    rowGap: 10,
    padding: 16,
  },
  ExerciseImage: {
    height: '90%',
    width: '90%',
    resizeMode: 'cover',
  },
});
