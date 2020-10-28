import React, { useCallback, useEffect } from "react";
import { View, Text, Button, StyleSheet, Image, ScrollView } from "react-native";
// import { MEALS } from "../data/dummy-data";
import MealsNavigator from "../navigation/MealsNavigator";
import { Feather } from '@expo/vector-icons';
import CustomHeaderButton from "../components/CustomHeaderButton";
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { toggleFavorite } from '../store/actions/mealAction'

const MealDetailScreen = (props) => {
  // เขียนโค้ดเพิ่ม เพื่อดึงอ็อบเจ๊คเมนูอาหารที่ผู้ใช้เลือกเอาไว้
  const mealId = props.navigation.getParam("id")
  const MEALS = useSelector(state=> state.meals.meals)
  const displayedMeals = MEALS.find(meal => mealId === meal.id);

  const dispatch = useDispatch()

  const toggleFavoriteHandler = useCallback(() =>{
    dispatch(toggleFavorite(mealId))
  },[dispatch, mealId]);

  useEffect(()=>{
    props.navigation.setParams({ toggleFav: toggleFavoriteHandler })
  },[toggleFavorite]);

  const currentMealFav = useSelector(state=> state.meals.favoriteMeals.some(meal=> meal.id === mealId))
  useEffect(()=>{
    props.navigation.setParams({ isFav : currentMealFav })
  },[currentMealFav]);



  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <Image style={styles.mealBg} source={{ uri: displayedMeals.imageUrl }} />
      
      <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
        <Text>{displayedMeals.duration}M</Text>
        <Text>{displayedMeals.complexity.toUpperCase()}</Text>
        <Text>{displayedMeals.affordability.toUpperCase()}</Text>
      </View>
      <View>
        <View>
          <Text style={styles.headerTitle}>Ingredients</Text>
          {displayedMeals.ingredients.map((reciepe, index) => {
            return <Text style={{
              marginHorizontal: '5%'
            }} key={index}>{reciepe}</Text>
          })}
        </View>
       
        <View>
          <Text style={styles.headerTitle}>Steps</Text>
          {displayedMeals.steps.map((reciepe, index) => {
            return <Text style={{
              marginHorizontal: '5%'
            }} key={index}>{index + 1}. {reciepe}</Text>
          })}</View>

        <Button
          title="Go Back to Categories"
          onPress={() => {
            // เขียนโค้ดเพิ่ม
            props.navigation.popToTop();
          }}
        />
        </View>
      </ScrollView>
    </View>
  );
};

MealDetailScreen.navigationOptions = (navigationData) => {
  // เขียนโค้ดเพิ่มเพื่อแสดงชื่อเมนูอาหารที่เลือกให้เป็นเฮดเดอร์
  const mealTitle = navigationData.navigation.getParam("mealTitle")
  // const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  // console.log("selectedMeal: ", selectedMeal);
  const toggleFav = navigationData.navigation.getParam("toggleFav")
  const isFavorite = navigationData.navigation.getParam("isFav")

  return {
    headerTitle: mealTitle,
    headerRight: () => {
      return (<HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Save"
          iconName={isFavorite ? 'ios-star': 'ios-star-outline'}
          onPress={toggleFav}
        />
      </HeaderButtons>)
    }
  };
};


const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  screen: {
    flex: 1
    // justifyContent: "center",
    // alignItems: "center",
  },
  mealBg: {
    height: 300
  },
  mealRow: {
    flexDirection: "row",
  },
  mealDetail: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    justifyContent: "space-between",
    // alignItems: "center",
    // height: "5%",
  },
});


export default MealDetailScreen;
