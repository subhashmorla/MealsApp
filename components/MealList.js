import React from "react";
import { StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import MealItem from "../components/MealItem";
import { useSelector } from "react-redux";

const MealList = (props) => {
  const favMeals = useSelector((state) => state.meals.favMeals);
  const renderMealItem = (itemData) => {
    return (
      <MealItem
        title={itemData.item.title}
        imageUrl={itemData.item.imageUrl}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        onSelectMeal={() => {
          props.navigation.navigate({
            routeName: "mealDetail",
            params: {
              mealId: itemData.item.id,
              mealTitle: itemData.item.title,
              isFav: favMeals.some((meal) => meal.id === itemData.item.id),
            },
          });
        }}
      />
    );
  };

  return (
    <FlatList
      data={props.data}
      renderItem={renderMealItem}
      keyExtractor={(item, index) => item.id}
      style={styles.mealItemList}
    />
  );
};

const styles = StyleSheet.create({
  mealItemList: {
    width: "100%",
  },
});
export default MealList;
