import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Card, Text } from '@ui-kitten/components';
import { MEALS } from '../mocks/dummy-data';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderBtnComponent from '../components/header/header-btn.component';

const MealDetailScreen = (props: any) => {
  const mealId = props.navigation.getParam('mealId');
  const mealDetails:  {[key: string]: any } = MEALS.find(meal => meal.id === mealId) || {};

  const toggleFavorites = () => {
    mealDetails.isFavorite = !mealDetails.isFavorite;
  }

  return (
    <Card style={styles.card}>
        <View style={styles.cardHeader}>
          <Image
            style={styles.cardImage}
            source={{uri: mealDetails.imageUrl}}
            resizeMode="cover"
          />
          <View style={styles.cardTitle}>
            <Text category='h5' numberOfLines={2}>{mealDetails.title}</Text>
          </View>
        </View>
      </Card>
  );
};

MealDetailScreen.navigationOptions = (navigationData: {[key: string]: any}) => {
  const mealId = navigationData.navigation.getParam('mealId');
  const mealDetails:  {[key: string]: any } = MEALS.find(meal => meal.id === mealId) || {};
  return {
    headerTitle: mealDetails.title,
    headerRight: () => (<HeaderButtons HeaderButtonComponent={HeaderBtnComponent}>
      <Item title='Favorite' iconName='star' onPress={() => {console.log('Favorite food, yeah!')}}/>
    </HeaderButtons>)
  }
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  card: {
    margin: 10,
    flex: 1,
  },
  cardHeader: {
    marginTop: -10,
    marginHorizontal: -18
  },
  cardImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    minHeight: 150
  },
  cardTitle: {
    width: '100%',
    paddingVertical: 3,
    paddingHorizontal: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  cardFooter: {
    padding: 10
  }
});

export default MealDetailScreen;