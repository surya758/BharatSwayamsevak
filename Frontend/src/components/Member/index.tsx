import {Image, ImageSourcePropType, Text, View} from 'react-native';
import React, {FC} from 'react';

import styles from './styles';

type Props = {
  image: ImageSourcePropType;
  name: string;
  designation: string;
};
const MemberComponent: FC<Props> = ({image, name, designation}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.imageStyle} source={image} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.designation} numberOfLines={2}>
        {designation}
      </Text>
    </View>
  );
};

export default MemberComponent;
