import * as React from 'react';

import {FlatList, Image, Text, View} from 'react-native';

import styles from './styles';

type eventProp = {
  event: eventType;
};

type eventType = {
  imageUrl: string[];
  title: string;
};
const CustomEventComponent = ({event}: eventProp) => {
  return (
    <View style={styles.eventView}>
      <Text style={styles.eventTitle}>{event.title}</Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={event.imageUrl}
        ItemSeparatorComponent={() => <View style={styles.flatListSeparator} />}
        renderItem={({item}) => {
          return (
            <View style={{}}>
              <Image
                source={{uri: item}}
                style={styles.image}
                resizeMode="stretch"
              />
            </View>
          );
        }}
      />
    </View>
  );
};

export default CustomEventComponent;
