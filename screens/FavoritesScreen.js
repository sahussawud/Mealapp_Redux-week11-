import React from "react";
import { View, Text, StyleSheet } from "react-native";
// import { MEALS } from "../data/dummy-data";
import MealList from "../components/MealList"
import { useSelector } from 'react-redux' 

const FavoritesScreen = (props) => {
  const favMeals = useSelector(state=> state.meals.favoriteMeals)

  return (
    <View style={styles.screen}>
      <MealList listData={favMeals} navigation={props.navigation}/>
    </View>
  );
};

FavoritesScreen.navigationOptions = (navigationData) => {
  return {
    headerTitle: "Your Favorites"
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FavoritesScreen;
