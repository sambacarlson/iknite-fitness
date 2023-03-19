import React from 'react';
import {useNavigation} from '@react-navigation/core';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../App';
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import DescriptionCard from '../components/DescriptionCard';
import ExerciseListItem from '../components/ExerciseListItem';
import {variables} from '../variables/global';
import {exercises} from '../exercise';

//variables
const customColors = variables.colors;
const fonts = variables.fonts;

//data and props
// const exers = {...exercises};
export interface overviewProp {
  exID: number;
  exTitle: string;
  exDuraction: number;
  visibleDesc: any; /// function visibleDescription
}

const Overview = (): JSX.Element => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const [showDescription, setShowDescription] = React.useState<boolean>(false);
  const visibleDescription = () => {
    setShowDescription(prevState => !prevState);
  };
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundColor = isDarkMode ? Colors.darker : Colors.light;
  return (
    <>
      {showDescription && <DescriptionCard visibleDesc={visibleDescription} />}

      <ScrollView
        style={[styles.Container, {backgroundColor: backgroundColor}]}>
        {exercises.map(exercise => (
          <View style={styles.ItemContainer}>
            <ExerciseListItem
              visibleDesc={visibleDescription}
              exTitle={exercise.exTitle}
              exDuraction={exercise.exDuration / 1000}
            />
          </View>
        ))}
      </ScrollView>
      {/* START Button */}
      <Pressable
        onPress={() => navigation.navigate('Exercise')}
        style={{
          position: 'absolute',
          bottom: '5%',
          width: '100%',
          height: '10%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            backgroundColor: customColors.primaryLight,
            width: '60%',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 14,
            borderRadius: 100,
          }}>
          <Text style={fonts.bigTitles}>START</Text>
        </View>
      </Pressable>
    </>
  );
};

export default Overview;

const styles = StyleSheet.create({
  Container: {
    padding: 8,
    flexDirection: 'column',
    rowGap: 20,
  },
  ItemContainer: {
    height: 100,
    marginVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: customColors.primaryLight,
  },
});
