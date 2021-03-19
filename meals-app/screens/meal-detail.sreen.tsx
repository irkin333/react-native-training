import React, { useEffect, useCallback } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Card, Text, List, ListItem } from '@ui-kitten/components';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderBtnComponent from '../components/header/header-btn.component';
import {ScrollView} from 'react-native-gesture-handler';
import { useSelector, useDispatch } from 'react-redux';
import { toggleFavorite } from '../store/actions/meals';

const MealDetailScreen = (props: any) => {
  const mealId = props.navigation.getParam('mealId');
  const meals = useSelector((state: any) => state.meals.meals);
  const mealDetails:  {[key: string]: any } = meals.find(meal => meal.id === mealId) || {};
  const isMealFav = useSelector((state: any) => state.meals.favoriteMeals.some(meal => meal.id === mealId));

  const dispatch = useDispatch();

  const toggleFavHandler = useCallback(() => {
    dispatch(toggleFavorite(mealId));
  }, [dispatch, mealId]);

  useEffect(() => {
    props.navigation.setParams({toggleFav: toggleFavHandler})
  }, [toggleFavHandler]);

  useEffect(() => {
    props.navigation.setParams({isFav: isMealFav})
  }, [isMealFav]);

  const renderListItem = (itemData: {[key: string]: any}) => {
    return (
      <ListItem
          title={itemData.item}
      />
    );
  }

  return (
    <ScrollView style={{height: '100%', flex: 1}}>
      <Card style={styles.card}>
        <View style={styles.cardHeader}>
          <Image
            style={styles.cardImage}
            source={{uri: mealDetails.imageUrl}}
            resizeMode="cover"
          />
          <View style={styles.cardTitle}>
            <Text category='h4' numberOfLines={2}>{mealDetails.title}</Text>
          </View>
          <View style={styles.cardAttributes}>
            <Text>{mealDetails.duration}m</Text>
            <Text>{mealDetails.complexity.toUpperCase()}</Text>
            <Text>{mealDetails.affordability.toUpperCase()}</Text>
          </View>
          <View style={styles.list}>
            <Text category='h6'>Ingredients</Text>
            <List
              // style={styles.list}
              data={mealDetails.steps}
              renderItem={renderListItem}
            />    
          </View>
          <View style={styles.list}>
            <Text category='h6'>Steps</Text>
            <List
              // style={styles.list}
              data={mealDetails.ingredients}
              renderItem={renderListItem}
            />    
          </View>
        </View>
      </Card>
    </ScrollView>
  );
};

MealDetailScreen.navigationOptions = (navigationData: {[key: string]: any}) => {
  const mealTitle = navigationData.navigation.getParam('mealTitle');
  const isFavorite = navigationData.navigation.getParam('isFav');
  const onToggleFavorite = navigationData.navigation.getParam('toggleFav');

  return {
    headerTitle: mealTitle,
    headerRight: () => (<HeaderButtons HeaderButtonComponent={HeaderBtnComponent}>
      <Item title='Favorite'
            iconName='star' 
            color={isFavorite ? '#843CDB' : '#BDBDBD'}
            onPress={onToggleFavorite}/>
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
  cardAttributes: {
    backgroundColor: '#EEEEEE',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: -6,
    paddingHorizontal: 10,
    paddingVertical: 3 
  },
  list: {
    paddingVertical: 5,
    paddingHorizontal: 8
  },
  cardFooter: {
    padding: 10
  }
});

export default MealDetailScreen;