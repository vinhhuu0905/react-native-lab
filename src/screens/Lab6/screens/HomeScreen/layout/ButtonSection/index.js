import React, {memo} from 'react';
import {TouchableOpacity, Image, Text} from 'react-native';
import {icons} from '@utils/constants';

import styles from './index.styles';

const ButtonSection = memo(({label, source}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => console.log('Claim')}>
      <Image source={source} resizeMode="contain" style={styles.image} />
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
});

export default ButtonSection;
