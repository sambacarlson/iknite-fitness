import React, {useEffect} from 'react';
import {ScrollView, StyleSheet, useColorScheme, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import CategoryCard from '../components/CategoryCard';

const Home = (): JSX.Element => {
  const isDarkMode = useColorScheme() === 'dark';
  const colorTheme = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  useEffect(() => {}, []);
  return (
    <ScrollView
      style={[{backgroundColor: colorTheme.backgroundColor}, styles.Container]}>
      <View style={styles.CategoryCard}>
        <CategoryCard />
      </View>
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
