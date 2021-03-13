import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { Divider, Icon, Layout, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import {TopNavigationAccessoriesShowcase} from './top-nav.component';

const BackIcon = (props: any) => (
  <Icon {...props} name='arrow-back' />
);

export const DetailsScreen = (props: any) => {

  const navigateBack = () => {
    props.navigation.goBack();
  };

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack}/>
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigationAccessoriesShowcase title='Details' alignment='center' accessoryLeft={BackAction}/>
      <Divider/>
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>DETAILS</Text>
      </Layout>
    </SafeAreaView>
  );
};