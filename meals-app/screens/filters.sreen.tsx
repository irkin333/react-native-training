import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderBtnComponent from '../components/header/header-btn.component';
import SwitchStateComponent from '../components/switch-state.component';
import { setFilters } from '../store/actions/meals';
import { useDispatch } from 'react-redux';

const FilterScreen = (props: {[key: string]: any}) => {
  const { navigation } = props;
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegeterian, setIsVegeterian] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const dispatch = useDispatch();

  const saveFilters = useCallback(() => {
    const appliedFilters =  {
      isGlutenFree,
      isLactoseFree,
      isVegeterian,
      isVegan
    };
    dispatch(setFilters(appliedFilters));
  }, [isGlutenFree, isLactoseFree, isVegeterian, isVegan, dispatch]);

  useEffect(() => {
    props.navigation.setParams({
      save: saveFilters
    });
  }, [saveFilters]);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filters / Restrictions</Text>
      <SwitchStateComponent title='Gluten free'
                            state={isGlutenFree}
                            onChange={(newValue: boolean) => { setIsGlutenFree(newValue)}}/>
      <SwitchStateComponent title='Lactose free'
                            state={isLactoseFree}
                            onChange={(newValue: boolean) => { setIsLactoseFree(newValue)}}/>
      <SwitchStateComponent title='Vegeterian'
                            state={isVegeterian}
                            onChange={(newValue: boolean) => { setIsVegeterian(newValue)}}/>
      <SwitchStateComponent title='Vegan'
                            state={isVegan}
                            onChange={(newValue: boolean) => { setIsVegan(newValue)}}/>
    </View>
  );
};

FilterScreen.navigationOptions = (navigationData: {[key: string]: any}) => {
  return {
    headerTitle: 'Filtered Meals',
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderBtnComponent}>
        <Item title='Menu'
              iconName='menu-outline' 
              color='#843CDB'
              style={{
                marginLeft: 5
              }}
              onPress={() => {
                navigationData.navigation.toggleDrawer();
              }}/>
      </HeaderButtons>
    ),
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderBtnComponent}>
        <Item title='Save'
              iconName='save-outline' 
              color='#843CDB'
              style={{
                marginRight: 5
              }}
              onPress={() => {
                const onSave = navigationData.navigation.getParam('save');
                onSave();
              }}/>
      </HeaderButtons>
    )
  }
};

const styles = StyleSheet.create({
  screen: {
    flex: 1, 
    alignItems: 'center'
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    margin: 20,
    textAlign: 'center'
  }
});

export default FilterScreen;