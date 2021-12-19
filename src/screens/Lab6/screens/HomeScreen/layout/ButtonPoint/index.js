import React, {memo} from 'react';
import {TouchableOpacity, View, Text, Image} from 'react-native';
import {icons} from '@utils/constants';

import styles from './index.styles';

const ButtonPoint = memo(({point}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        console.log('Point');
      }}>
      <View style={styles.containerIcon}>
        <Image
          source={icons.plus_icon}
          resizeMode="contain"
          style={styles.icon}
        />
      </View>
      <Text style={styles.text}>{point} point</Text>
    </TouchableOpacity>
  );
});

export default ButtonPoint;
