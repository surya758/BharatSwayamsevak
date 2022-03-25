import * as React from 'react';

import {FlatList, Image, ImageSourcePropType, Text, View} from 'react-native';

import styles from './styles';

type membersProp = {
  members: memberType[];
};

type memberType = {
  name: string;
  designation: string;
  regNo: string;
  imageUrl: ImageSourcePropType;
};

const CustomCommitteeComponent = ({members}: membersProp) => {
  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={members}
        keyExtractor={item => item.name}
        ItemSeparatorComponent={() => <View style={styles.flatListSeparator} />}
        renderItem={({item}) => {
          return (
            <View>
              <Image
                source={item.imageUrl}
                style={styles.image}
                resizeMode="stretch"
              />
              <View style={styles.infoView}>
                <Text style={styles.info} numberOfLines={1}>
                  {item.name}
                </Text>
                <Text style={styles.info} numberOfLines={1}>
                  {item.designation}
                </Text>
                <Text style={styles.info} numberOfLines={1}>
                  {item.regNo}
                </Text>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default CustomCommitteeComponent;
