import React, {useCallback} from 'react';
import {
  View,
  SafeAreaView,
  Text,
  StatusBar,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {COLORS, FONTS, icons, SIZES} from '@utils/constants';

import styles from './index.styles';
import ButtonPoint from './layout/ButtonPoint';
import ButtonSection from './layout/ButtonSection';
import {useModels} from './index.viewModels';
import {LineDivider} from '@components/LineVerticalDevide';
import {CardView} from '@components/CardView';

export const HomeScreen = ({navigation}) => {
  const {state, selectCategories} = useModels();

  const renderHeader = useCallback(() => {
    return (
      <View style={styles.containerHeader}>
        <View style={{flex: 1}}>
          <View style={{marginRight: SIZES.padding}}>
            <Text style={styles.title}>Good Morning</Text>
            <Text style={styles.subTitle}>{state?.profile.userName}</Text>
          </View>
        </View>
        <ButtonPoint point={state?.profile?.point} />
      </View>
    );
  }, [state?.profile.userName, state?.profile?.point]);

  const renderButtonSection = useCallback(() => {
    return (
      <View style={styles.buttonSectionContainer}>
        <View style={styles.buttonSectionSubContainer}>
          <ButtonSection label="Claim" source={icons.claim_icon} />
          <LineDivider />
          <ButtonSection label="Get Point" source={icons.point_icon} />
          <LineDivider />
          <ButtonSection label="My Card" source={icons.card_icon} />
        </View>
      </View>
    );
  }, []);

  const renderMyBookSection = useCallback(() => {
    const renderItem = ({item, index}) => {
      return (
        <CardView
          onPress={() =>
            navigation.navigate('BookDetail', {
              book: item,
            })
          }
          styleContainer={{marginLeft: index == 0 ? SIZES.padding : 0}}
          source={item.bookCover}
          lastRead={item.lastRead}
          completion={item.completion}
        />
      );
    };
    return (
      <View style={{flex: 1}}>
        <View style={styles.containerBookSection}>
          <Text style={{...FONTS.h2, color: COLORS.white}}>My Book</Text>
          <TouchableOpacity onPress={() => console.log('See More')}>
            <Text style={styles.buttonSeeMore}>see more</Text>
          </TouchableOpacity>
        </View>
        <View style={{flex: 1, marginTop: SIZES.padding}}>
          <FlatList
            data={state.myBooks}
            renderItem={renderItem}
            snapToInterval={210}
            contentContainerStyle={{paddingRight: 210}}
            decelerationRate="fast"
            keyExtractor={item => `${item.id}`}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
    );
  }, []);

  const renderCategoryHeader = useCallback(() => {
    const renderItem = ({item}) => {
      return (
        <TouchableOpacity
          style={{flex: 1, marginRight: SIZES.padding}}
          onPress={() => selectCategories(item.id)}>
          {state.selectedCategory === item.id && (
            <Text style={{...FONTS.h2, color: COLORS.white}}>
              {item.categoryName}
            </Text>
          )}
          {state.selectedCategory !== item.id && (
            <Text style={{...FONTS.h2, color: COLORS.lightGray}}>
              {item.categoryName}
            </Text>
          )}
        </TouchableOpacity>
      );
    };

    return (
      <View style={{flex: 1, paddingLeft: SIZES.padding}}>
        <FlatList
          data={state.categories}
          showsHorizontalScrollIndicator={false}
          renderItem={renderItem}
          keyExtractor={item => `${item.id}`}
          horizontal
        />
      </View>
    );
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        animated
        barStyle="light-content"
      />
      <View style={{height: 200}}>
        {renderHeader()}
        {renderButtonSection()}
      </View>
      <ScrollView style={{marginTop: SIZES.radius}}>
        <View>{renderMyBookSection()}</View>
        <View style={{marginTop: SIZES.padding}}>
          <View>{renderCategoryHeader()}</View>
          {/* <View>{renderCategoryData()}</View> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
