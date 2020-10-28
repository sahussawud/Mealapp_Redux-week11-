import React, { useState } from "react";
import { View, Text, StyleSheet, Switch } from "react-native";
import CustomHeaderButton from "../components/CustomHeaderButton";
import { HeaderButtons, Item } from 'react-navigation-header-buttons';


const FiltersScreen = (props) => {
  const [isGlutenFree, setIsGlutenFree] = useState(false)
  const [isLactoseFree, setIsLactoseFree] = useState(false)
  const [isVegan, setIsVegan] = useState(false)
  const [isVegetarian, setIsVegetarian] = useState(false)

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filters / Restrictions!</Text>
      <View style={styles.filterRow}>
        <Text style={styles.text}>isGlutenFree</Text>
        <View style={{flex:1, alignItems:'center'}}><Switch value={isGlutenFree} onValueChange={setIsGlutenFree}></Switch></View>
      </View>

      <View style={styles.filterRow}>
        <Text style={styles.text}>isLactoseFree</Text>
        <View style={{flex:1, alignItems:'center'}}><Switch value={isLactoseFree} onValueChange={setIsLactoseFree}></Switch></View>
      </View>

      <View style={styles.filterRow}>
        <Text style={styles.text}>isVegan</Text>
        <View style={{flex:1, alignItems:'center'}}><Switch value={isVegan} onValueChange={setIsVegan}></Switch></View>
      </View>

      <View style={styles.filterRow}>
        <Text style={styles.text}>isVegetarian</Text>
        <View style={{flex:1, alignItems:'center'}}><Switch value={isVegetarian} onValueChange={setIsVegetarian}></Switch></View>
      </View>


    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    margin: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    marginVertical: 15,
  },
  text:{
    flex: 1,
    fontSize: 18,
    textAlign: "center",
  },
  filterRow:{
    // flex: 1,
    flexDirection: "row",
    margin: 10
  }
});

FiltersScreen.navigationOptions = (navigationData) => {
  return {
    headerTitle: "Filter Meals",
    headerLeft: () => {
      return (<HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Menu"
          iconName="ios-list"
          onPress={() => {
            navigationData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>)
    },
    headerRight: ()=>{
      return (<HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Save"
          iconName="ios-save"
          onPress={() => {  
          }}
        />
      </HeaderButtons>)
    }
  }
};

export default FiltersScreen;
