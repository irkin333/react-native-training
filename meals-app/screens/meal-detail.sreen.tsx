import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Card, Text, Icon } from '@ui-kitten/components';
import { MEALS } from '../mocks/dummy-data';

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
            <Icon name='star'
                  fill={mealDetails.isFavorite ? '#2F0F7A' : '#cecece'}
                  style={{width: 22, height: 22}}
                  onPress={toggleFavorites}/>
          </View>
        </View>
      </Card>
  );
};

MealDetailScreen.navigationOptions = (navigationData: {[key: string]: any}) => {
  const mealId = navigationData.navigation.getParam('mealId');
  const mealDetails:  {[key: string]: any } = MEALS.find(meal => meal.id === mealId) || {};
  return {
    headerTitle: mealDetails.title
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
  headerIcon: {
    width: 22,
    height: 22,
    marginRight: 5
  },
  cardDetailsWrapper: {
  },
  cardFooter: {
    padding: 10
  }
});

export default MealDetailScreen;