import React from 'react';
import { StyleSheet, View, Image, ImageBackground } from 'react-native';
import { Card, Text, Button, Icon } from '@ui-kitten/components';

const MealItemComponent = (props: any) => {
  const item = props.itemData.item;
  const mealStatus = item.duration <= 30 ? 'success' : item.duration <= 60 ? 'warning' : 'danger';

  return (
    <Card style={styles.card}
          status={mealStatus}
          header={() => {
            return (
              <View {...props} style={styles.cardHeader}>
                <Text category='h6' numberOfLines={2}>{item.title}</Text>
              </View>
            )
          }}
          footer={() => {
            return (
              <View style={styles.cardFooter}>
                <Button size='small' status='primary' onPress={() => { props.onNavigate(item) }}>
                  More
                </Button>
              </View>
            )}}>
         <ImageBackground source={{uri: item.imageUrl}} style={styles.bgImage}>
          <View style={styles.cardDetailsWrapper}>
            <View style={styles.cardDetails}>
              <Text style={styles.detailsText}>Is vegan: {item.isVegan ? "yes" : 'no'}</Text>
              <Icon style={styles.cardDetailIcon} fill='#ffffff' name='clock'/>
              <Text style={styles.detailsText}>{item.duration}m</Text>
            </View>
          </View>
        </ImageBackground>
      </Card>
  );
};


const styles = StyleSheet.create({
  card: {
    margin: 5,
    flex: 1,
    maxWidth: '50%'
  },
  cardHeader: {
    padding: 10,
    flex: 1
  },
  cardDetailsWrapper: {
    minHeight: 120,
    justifyContent: 'flex-end'
  },
  bgImage: {
    marginVertical: -15,
    marginHorizontal: -23,
    resizeMode: "contain"
  },
  cardFooter: {
    padding: 10
  },
  cardDetails: {
    paddingRight: 5,
    paddingVertical: 3,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#00000065'
  },
  cardDetailIcon: {
    width: 22,
    height: 22,
    marginRight: 3
  },
  detailsText: {
    color: '#ffffff'
  }
});

export default MealItemComponent;