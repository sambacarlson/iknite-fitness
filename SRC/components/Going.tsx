/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {GoingProp} from '../props';
import {variables} from '../variables/global';

//variables
const fonts = variables.fonts;
const customColors = variables.colors;
const exerciseImg = {
  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkff67hRNN4RFZrlWEeRTK_tinV_69uL0sNA&usqp=CAU',
};

const Going = (props: GoingProp) => {
  return (
    <View style={styles.GoingContainer}>
      <View style={styles.ImgContainer}>
        <Image source={exerciseImg} style={styles.ExImage} />
      </View>
      <Text
        style={[
          fonts.bigTitles,
          {color: customColors.primaryLight, fontSize: 72},
        ]}>
        {props.exDuration} {/*==============================*/}
      </Text>
      <Text style={[fonts.mediumTitles]}>{props.exTitle}</Text>
      <View style={styles.BottomProgressBar}>
        <Icon name="chevron-left" size={20} />
        <Icon name="pause" size={28} />
        <Icon name="chevron-right" size={20} />
      </View>
    </View>
  );
};

export default Going;

const styles = StyleSheet.create({
  GoingContainer: {
    alignItems: 'center',
    // justifyContent: 'center',
    paddingBottom: 60,
    height: '100%',
    width: '100%',
  },
  BottomProgressBar: {
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
  },
  ImgContainer: {
    width: '80%',
    height: '30%',
    marginBottom: '20%',
  },
  ExImage: {
    width: '100%',
    height: '100%',
  },
});
