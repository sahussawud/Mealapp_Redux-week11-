import React from "react";
import { StyleSheet } from "react-native";

import MealsNavigator from './navigation/MealsNavigator';
import { createStore, combineReducers } from 'redux';
import { Provider} from "react-redux";
import mealsReducer from './store/reducers/mealReducer'
export default function App() {
  // เพิ่มโค้ดส่วนนี้
  const rootReducer = combineReducers({
    meals: mealsReducer
  })
  const store = createStore(rootReducer);
  return (
    <Provider store={store}>
      <MealsNavigator/>
    </Provider>);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
});
