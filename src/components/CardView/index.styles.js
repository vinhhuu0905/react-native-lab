import {COLORS, FONTS, SIZES} from '@utils/constants';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    // marginLeft: index == 0 ? SIZES.padding : 0,
    marginRight: SIZES.radius,
  },
  image: {
    width: 180,
    height: 250,
    borderRadius: 20,
  },
  containerContent: {
    marginTop: SIZES.radius,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconClock: {
    width: 20,
    height: 20,
    tintColor: COLORS.lightGray,
  },
  lastRead: {
    marginLeft: 5,
    ...FONTS.body3,
    color: COLORS.lightGray,
  },
  pageIcon: {
    marginLeft: SIZES.radius,
    width: 20,
    height: 20,
    tintColor: COLORS.lightGray,
  },
  completion: {
    marginLeft: 5,
    ...FONTS.body3,
    color: COLORS.lightGray,
  },
});
