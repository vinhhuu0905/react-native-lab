import {StatusBar, StyleSheet} from 'react-native';
import {COLORS, SIZES, FONTS} from '@utils/constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
    paddingTop: StatusBar.currentHeight,
  },
  containerHeader: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: SIZES.padding,
    alignItems: 'center',
  },
  title: {
    ...FONTS.h3,
    color: COLORS.white,
  },
  subTitle: {
    ...FONTS.h2,
    color: COLORS.white,
  },
  buttonSectionContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: SIZES.padding,
  },
  buttonSectionSubContainer: {
    flexDirection: 'row',
    height: 70,
    backgroundColor: COLORS.secondary,
    borderRadius: SIZES.radius,
  },
  containerBookSection: {
    paddingHorizontal: SIZES.padding,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonSeeMore: {
    ...FONTS.body3,
    color: COLORS.lightGray,
    alignSelf: 'flex-start',
    textDecorationLine: 'underline',
  }
});
