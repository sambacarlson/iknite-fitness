/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  useColorScheme,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {exercises} from '../exercise';
import {useAppSelector} from '../store/hooks';
import {variables} from '../variables/global';

//variabales
const descImage = {
  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5BM_wwMLUDyR8NRH-fkjcinEJRUR1f7tQzg&usqp=CAU',
};
const fonts = variables.fonts;
const customColors = variables.colors;

const DescriptionCard = (props: any) => {
  const currentID = useAppSelector((state: any) => state.uiControls);
  const descObj = {exTitle: '', exSteps: '', exDuration: 0};
  exercises.map(item => {
    if (item.exID === currentID.currentExID) {
      descObj.exTitle = item.exTitle;
      descObj.exDuration = item.exDuration;
      descObj.exSteps = item.exSteps[0];
    }
  });

  const darkMode = useColorScheme() === 'dark';
  return (
    <View style={[styles.OuterView]}>
      <View style={styles.MiddleView}>
        <View
          style={{
            alignItems: 'flex-end',
            position: 'absolute',
            top: 0,
            right: 30,
          }}>
          {/* close button */}
          <Pressable onPress={() => props.visibleDesc()}>
            <Icon
              name="times-circle-o"
              size={25}
              color={customColors.primaryLighter}
            />
          </Pressable>
        </View>
        <View
          style={[
            styles.Container,
            {backgroundColor: darkMode ? Colors.dark : Colors.light},
          ]}>
          {/* contents */}
          <View
            style={{
              flexDirection: 'column',
              padding: 16,
              height: '100%',
              rowGap: 4,
            }}>
            {/* description image */}
            <View
              style={{
                width: '60%',
                // height: '25%',
                alignSelf: 'center',
                flex: 2,
              }}>
              <Image
                source={descImage}
                style={{width: '100%', height: '100%', resizeMode: 'cover'}}
              />
            </View>
            {/* Title and camera */}
            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                alignItems: 'flex-end',
                justifyContent: 'center',
                flex: 2,
              }}>
              <View
                style={{
                  flex: 4,
                  height: '100%',
                  justifyContent: 'center',
                }}>
                <Text
                  style={[fonts.bigTitles, {color: customColors.primaryLight}]}>
                  {descObj.exTitle}
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  alignItems: 'flex-end',
                  justifyContent: 'center',
                  height: '100%',
                }}>
                <Icon
                  name="video-camera"
                  size={20}
                  color={customColors.primaryLighter}
                />
              </View>
            </View>
            {/* Description text */}
            <View style={{flex: 4}}>
              <Text style={{}}>{descObj.exSteps}</Text>
            </View>
            {/* time */}
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
                flex: 1,
              }}>
              <Icon
                name="minus-square-o"
                size={25}
                color={customColors.primaryLight}
              />
              <Text style={(customColors.primaryDark, fonts.mediumTitles)}>
                00:{descObj.exDuration / 1000}
              </Text>
              <Icon
                name="plus-square-o"
                size={25}
                color={customColors.primaryLight}
              />
            </View>
          </View>
          {/* bottom buttons */}
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <View
              style={{
                backgroundColor: customColors.primaryLighter,
                padding: 10,
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{color: 'white'}}>RESET</Text>
            </View>
            <View
              style={{
                backgroundColor: customColors.primaryDark,
                padding: 10,
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{color: 'white'}}>SAVE</Text>
            </View>
          </View>
          {/* content end */}
        </View>
      </View>
    </View>
  );
};

export default DescriptionCard;

const styles = StyleSheet.create({
  OuterView: {
    position: 'absolute',
    zIndex: 2,
    backgroundColor: 'rgba(52, 52, 52, 0.9)',
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    AlignItems: 'center',
  },
  MiddleView: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  Container: {
    width: '75%',
    height: '80%',
    marginHorizontal: 'auto',
    // All above stylings are for card possitioning on screen. following are for contents
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingTop: 10,
  },
});
