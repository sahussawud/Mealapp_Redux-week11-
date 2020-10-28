import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Platform,
  FlatList,
} from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import MealItem from "../components/MealItem";
import MealList from "../components/MealList"
import { useSelector} from 'react-redux';

const CategoryMealsScreen = (props) => {
  const catId = props.navigation.getParam("id")
  const availableMeals = useSelector(state=> state.meals.filteredMeals)
  const displayedMeals = availableMeals.filter(meal=> meal.categoryIds.includes(catId));

  return (
    <View style={styles.screen}>
      <MealList listData={displayedMeals} navigation={props.navigation}/>
    </View>

  );
};

CategoryMealsScreen.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam("id")
  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);

  return {
    headerTitle: selectedCategory.title
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoryMealsScreen;
