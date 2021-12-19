import React, {memo} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {icons} from '@utils/constants';

import styles from './index.styles';
export const CardView = memo(
  ({onPress, styleContainer, source, lastRead, completion}) => {
    return (
      <TouchableOpacity
        style={[styles.container, styleContainer]}
        onPress={onPress}>
        <Image source={source} resizeMode="cover" style={styles.image} />
        <View style={styles.containerContent}>
          <Image source={icons.clock_icon} style={styles.iconClock} />
          <Text style={styles.lastRead}>{lastRead}</Text>
          <Image source={icons.page_icon} style={styles.pageIcon} />
          <Text style={styles.completion}>{completion}</Text>
        </View>
      </TouchableOpacity>
    );
  },
);
