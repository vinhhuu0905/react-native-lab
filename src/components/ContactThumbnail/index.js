import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Text,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '../../utils/colors';

const {width: widthScreen} = Dimensions.get('window');
export default ({
  name = '',
  phone = '',
  avatar,
  textColor = '#000',
  onPress = () => {},
}) => {
  const colorStyle = {
    color: textColor,
  };
  const ImageComponent = onPress ? TouchableOpacity : View;

  return (
    <View style={styles.container}>
      <ImageComponent onPress={onPress}>
        <Image
          source={{
            uri: avatar,
          }}
          style={styles.avatar}
        />
      </ImageComponent>
      {name !== '' && (
        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          style={[styles.name, colorStyle]}>
          {name}
        </Text>
      )}

      {phone !== '' && (
        <View style={styles.phoneSection}>
          <Icon name="phone" size={16} style={{color: textColor}} />
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={[styles.phone, colorStyle]}>
            {phone}
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: widthScreen / 3,
    height: 200,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.5,
    borderColor: colors.grey,
    padding: 20,
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    borderColor: 'white',
    borderWidth: 2,
  },
  name: {
    fontSize: 20,
    marginTop: 24,
    marginBottom: 2,
    fontWeight: 'bold',
  },
  phoneSection: {
    flexDirection: 'row',
    marginTop: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  phone: {
    width: '100%',
    marginLeft: 4,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
