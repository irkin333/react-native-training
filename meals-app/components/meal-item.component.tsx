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
                <Button size='small' status='primary' onPress={() => { console.log(item.id) }}>
                  More
                </Button>
              </View>
            )}}>
         <ImageBackground source={{uri: item.imageUrl}} style={styles.bgImage}>
          <View style={styles.cardDetailsWrapper}>
            {/* <Image
                style={styles.cardImage}
                source={{uri: item.imageUrl}}
                resizeMode="cover"
                /> */}
            <View style={styles.cardDetails}>
              <Icon style={styles.cardDetailIcon} fill='#8F9BB3' name='clock'/>
              <Text>{item.duration}m</Text>
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
    // marginVertical: -15,
    // marginHorizontal: -23,
    justifyContent: 'flex-end',
  },
  bgImage: {
    marginVertical: -15,
    marginHorizontal: -23,
    resizeMode: "contain"
  },
  cardImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    minHeight: 80
  },
  cardFooter: {
    padding: 10
  },
  cardDetails: {
    marginTop: 5,
    paddingRight: 5,
    paddingBottom: 5,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  cardDetailIcon: {
    width: 25,
    height: 25,
    marginRight: 3
  }
});

export default MealItemComponent;