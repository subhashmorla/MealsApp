import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealScreen from "../screens/CategoryMealScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import FiltersScreen from "../screens/FiltersScreen";
import { createBottomTabNavigator } from "react-navigation-tabs";
import FavouritesScreen from "../screens/FavouritesScreen";
import Colors from "../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { createDrawerNavigator } from "react-navigation-drawer";

const MealNavigator = createStackNavigator(
  {
    categories: CategoriesScreen,
    categoryMeal: CategoryMealScreen,
    mealDetail: MealDetailScreen,
  },
  {
    defaultNavigationOptions: {
      headerTintColor: Colors.primary,
    },
  }
);

const FavNavigator = createStackNavigator(
  {
    favourites: FavouritesScreen,
  },
  {
    defaultNavigationOptions: {
      headerTintColor: Colors.primary,
    },
  }
);

const FiltersNavigator = createStackNavigator({
  filters: FiltersScreen,
});

const MealsFavTabNavigator = createBottomTabNavigator(
  {
    meals: {
      screen: MealNavigator,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return (
            <Ionicons
              name="ios-restaurant"
              size={25}
              color={tabInfo.tintColor}
            />
          );
        },
      },
    },
    favourites: {
      screen: FavNavigator,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return (
            <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />
          );
        },
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: Colors.primary,
    },
  }
);

const MainNavigator = createDrawerNavigator({
  MealsFav: {
    screen: MealsFavTabNavigator,
    navigationOptions: {
      drawerLabel: "Meals",
    },
  },
  Fav: {
    screen: FiltersNavigator,
    navigationOptions: {
      drawerLabel: "Filters",
    },
  },
});

export default createAppContainer(MainNavigator);
