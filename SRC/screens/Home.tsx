import React from 'react';
import {Pressable, ScrollView, StyleSheet, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import CategoryCard from '../components/CategoryCard';

// import {exercises} from '../exercise';

// export type categorySetProp = {
//   CategoryName: string;
//   numOfExercises: number;
//   timeInMinutes: number;
// };
// const categorySet = new Set<categorySetProp>([]);

const Home = (): JSX.Element => {
  const isDarkMode = useColorScheme() === 'dark';
  const colorTheme = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  return (
    <ScrollView
      style={[{backgroundColor: colorTheme.backgroundColor}, styles.Container]}>
      <Pressable style={styles.CategoryCard}>
        <CategoryCard />
      </Pressable>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  Container: {
    paddingHorizontal: '2%',
    flexDirection: 'column',
  },
  CategoryCard: {
    // borderWidth: 1,
    marginVertical: '1%',
    height: 110,
  },
});
