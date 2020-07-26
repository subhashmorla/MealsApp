import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MealList from "../components/MealList";
import { useSelector } from "react-redux";

const FavouritesScreen = (props) => {
  const displayedMeals = useSelector((state) => state.meals.favMeals);

  if (displayedMeals.length === 0 || !displayedMeals) {
    return (
      <View style={styles.container}>
        <Text>No Favourites found. Please add!</Text>
      </View>
    );
  }
  return (
    <View style={styles.screen}>
      <MealList data={displayedMeals} navigation={props.navigation} />
    </View>
  );
};

FavouritesScreen.navigationOptions = {
  headerTitle: "Your Favourites",
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default FavouritesScreen;
