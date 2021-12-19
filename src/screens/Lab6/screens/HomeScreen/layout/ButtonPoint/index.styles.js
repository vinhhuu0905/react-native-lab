import {COLORS, FONTS, SIZES} from '@utils/constants';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
    height: 40,
    paddingLeft: 3,
    paddingRight: SIZES.radius,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerIcon: {
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  icon: {
    width: 20,
    height: 20,
  },
  text: {
    marginLeft: SIZES.base,
    color: COLORS.white,
    ...FONTS.body3,
  },
});
