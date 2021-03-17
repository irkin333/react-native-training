import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Card, Text, List, ListItem } from '@ui-kitten/components';
import { MEALS } from '../mocks/dummy-data';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderBtnComponent from '../components/header/header-btn.component';
import {ScrollView} from 'react-native-gesture-handler';

const MealDetailScreen = (props: any) => {
  const mealId = props.navigation.getParam('mealId');
  const mealDetails:  {[key: string]: any } = MEALS.find(meal => meal.id === mealId) || {};

  const toggleFavorites = () => {
    mealDetails.isFavorite = !mealDetails.isFavorite;
  }

  const renderListItem = (itemData: {[key: string]: any}) => {
    return (
      <ListItem
          title={itemData.item}
      />
    );
  }

  return (
    <ScrollView style={{height: '100%'}}>
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
  const mealId = navigationData.navigation.getParam('mealId');
  const mealDetails:  {[key: string]: any } = MEALS.find(meal => meal.id === mealId) || {};
  return {
    headerTitle: mealDetails.title,
    headerRight: () => (<HeaderButtons HeaderButtonComponent={HeaderBtnComponent}>
      <Item title='Favorite'
            iconName='star' 
            color={mealDetails.isFavorite ? '#843CDB' : '#BDBDBD'}
            onPress={() => {console.log('Favorite food, yeah!')}}/>
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