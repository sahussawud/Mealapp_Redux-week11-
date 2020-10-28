// import คอมโพเนนต์ที่จำเป็น
import React from 'react'
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createDrawerNavigator } from 'react-navigation-drawer'
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from '@expo/vector-icons';

import { createAppContainer } from "react-navigation";
import Screen1 from "../screens/CategoriesScreen";
import Screen2 from "../screens/CategoryMealsScreen";
import Screen3 from "../screens/MealDetailScreen";

import FavoriteScreen from "../screens/FavoritesScreen"
import MealDetailScreen from "../screens/MealDetailScreen"
import FilterScreen from '../screens/FiltersScreen'

const MealsNavigator = createStackNavigator(
  {
    // กำหนด RouteConfigs (Slide 14)
    CategoriesScreen: Screen1,
    CategoryMealsScreen: Screen2,
    MealDetailScreen: Screen3,

  },
  {
    // กำหนด defaultNavigationOptions (Slide 23-24)
    defaultNavigationOptions: {
      headerStyle: { backgroundColor: "#4a148c", },
      headerTintColor: "white"
    }
  }
);

const FavNavigator = createStackNavigator({
  Favorites: FavoriteScreen,
  MealDetailScreen: MealDetailScreen
}, {
  defaultNavigationOptions: {
    headerStyle: { backgroundColor: "#4a148c", },
    headerTintColor: "white"
  }
});

const FiltersNavigator = createStackNavigator({
  Filters: FilterScreen
}, {
  defaultNavigationOptions: {
    headerStyle: { backgroundColor: "#4a148c", },
    headerTintColor: "white"
  }
});



const MealsFavTabNavigator = createBottomTabNavigator({
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return (<Ionicons name="ios-restaurant" size={24} color={tabInfo.tintColor} />)
      }
    }
  },
  Favorites: {
    screen: FavNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return (<Ionicons name="ios-star" size={24} color={tabInfo.tintColor} />)
      }
    }
  }
},
  {
    tabBarOptions: {
      activeTintColor: "darkblue",
      labelStyle: { fontSize: 18, },
      style: { backgroundColor: "lightblue", },
    },

  });

const MainNavigator = createDrawerNavigator({
  MealsFav: {
    screen: MealsFavTabNavigator,
    navigationOptions: {
      drawerLabel: "Meals"
    }
  },
  Filters: {
    screen: FiltersNavigator
  }
}, { contentOptions: { activeTintColor: "orange" }, }
);
export default createAppContainer(MainNavigator);
