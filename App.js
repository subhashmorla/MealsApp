import React from "react";
import { StyleSheet } from "react-native";
import MealNavigator from "./navigation/MealNavigator";
import { enableScreens } from "react-native-screens";
import { createStore, combineReducers } from "redux";
import mealsReducer from "./store/reducers/meals";
import { Provider } from "react-redux";

// import * as Font from "expo-font";
// import { AppLoading } from "expo";

enableScreens();

const rootReducer = combineReducers({
  meals: mealsReducer,
});
const store = createStore(rootReducer);

// const fetchFonts = () => {
//   return Font.loadAsync({
//     "open-sans": require("../assets/fonts/OpenSans-Regular.ttf"),
//     "open-sans-bold": require("../assets/fonts/OpenSans-Bold.ttf"),
//   });
// };

export default function App() {
  // const [fontsLoaded, setFontsLoaded] = useState();

  // if (!fontsLoaded) {
  //   return (
  //     <AppLoading
  //       startAsync={fetchFonts}
  //       onFinish={() => {
  //         setFontsLoaded(true);
  //       }}
  //     />
  //   );
  // }
  return (
    <Provider store={store}>
      <MealNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
