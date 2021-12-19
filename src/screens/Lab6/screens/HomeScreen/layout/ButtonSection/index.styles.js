import {COLORS, FONTS, SIZES} from '@utils/constants';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 30,
    height: 30,
  },
  text: {
    marginLeft: SIZES.base,
    ...FONTS.body3,
    color: COLORS.white,
  },
});
