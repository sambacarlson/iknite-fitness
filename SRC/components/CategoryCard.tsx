/**
 * CARD FOR CATERGORIES OF EXERCISES SHOWN ON HOME SCREEN
 */
import React from 'react';
import {View, Text, StyleSheet, ImageBackground, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/core';
import {variables} from '../variables/global';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../App';

//variables
const customColors = variables.colors;
const fonts = variables.fonts;
const backgroundImage = {
  uri: 'https://images.pexels.com/photos/6453405/pexels-photo-6453405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
};
const CategoryCard = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  return (
    <ImageBackground
      source={backgroundImage}
      resizeMode="cover"
      imageStyle={styles.BackgroundImage}>
      <Pressable
        onPress={() => navigation.navigate('Overview')}
        style={styles.Container}>
        <Text style={fonts.bigTitles}>Full Body Workout.</Text>
        <View style={styles.BottomRowContainer}>
          <View style={styles.BottomItemsRow}>
            <Icon
              name="clock-o"
              size={16}
              color={customColors.primaryLighter}
            />
            <Text style={fonts.normalText}>5 Minutes</Text>
          </View>
          <View style={styles.BottomItemsRow}>
            <Icon name="bolt" size={16} color={customColors.primaryLighter} />
            <Text style={fonts.normalText}>10 Exercises</Text>
          </View>
        </View>
      </Pressable>
    </ImageBackground>
  );
};

export default CategoryCard;

const styles = StyleSheet.create({
  Container: {
    posistion: 'relative',
    backgroundColor: 'rgba(52, 52, 52, 0.5)',
    height: '100%',
    padding: 4,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderRadius: 16,
  },
  BackgroundImage: {
    height: '100%',
    width: '100%',
    borderRadius: 16,
  },
  BottomRowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  BottomItemsRow: {
    flexDirection: 'row',
    columnGap: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
