import React from 'react';
import { StyleSheet } from 'react-native';
import { CATEGORIES } from '../mocks/dummy-data';
import { Button, Icon, List, ListItem } from '@ui-kitten/components';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import HeaderBtnComponent from '../components/header/header-btn.component';

const CategoriesScreen = (props: any) => {
  const renderItemAccessory = (params: any) => (
    <Button size='small' onPress={() => {
      props.navigation.navigate({
        routeName: 'categoryMeals',
        params: {
          categoryId: params.id,
          categoryTitle: params.title
        }
      });
    }}>View</Button>
  );

  const renderItemIcon = (props: any) => {
    return (<Icon {...props} name='heart'/>)
  };

  const renderGridItem = (itemData: {[key: string]: any}) => {
    return (
      <ListItem
          title={itemData.item.title}
          description={itemData.item.description}
          accessoryLeft={() => { return renderItemIcon({ style: {
            height: 24,
            marginHorizontal: 8,
            tintColor: itemData.item.color,
            width: 24
          }});}}
          accessoryRight={() => renderItemAccessory({id: itemData.item.id, title: itemData.item.title})}
      />
    );
  }

  return (
    <List
      style={styles.container}
      data={CATEGORIES}
      renderItem={renderGridItem}
    />    
  );
};

CategoriesScreen.navigationOptions = (navigationData: {[key: string]: any}) => {
  return {
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
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: 190
  }
});

export default CategoriesScreen;
