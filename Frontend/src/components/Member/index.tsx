import {Image, ImageSourcePropType, Text, View} from 'react-native';

import React from 'react';
import styles from './styles';

type Props = {
  image: ImageSourcePropType;
  name: string;
  designation: string;
};
const MemberComponent: React.FC<Props> = ({image, name, designation}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.imageStyle} source={image} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.name}>{designation}</Text>
    </View>
  );
};

export default MemberComponent;
