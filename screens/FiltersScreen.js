import React, { useState, useCallback, useEffect } from "react";
import { View, Text, StyleSheet, Switch } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";

const FilterItem = (props) => {
  return (
    <View style={styles.filterContainer}>
      <Text style={styles.filterName}>{props.name}</Text>
      <Switch value={props.state} onValueChange={props.onChange} />
    </View>
  );
};

const FiltersScreen = (props) => {
  const [isGluttenFree, setisGluttenFree] = useState(false);
  const [isLactoseFree, setisLactoseFree] = useState(false);
  const [isVeganFree, setisVeganFree] = useState(false);
  const { navigation } = props;

  const saveFilters = useCallback(() => {
    const appliedFilters = {
      gluttenFree: isGluttenFree,
      lactoseFree: isLactoseFree,
      veganFree: isVeganFree,
    };
  }, [isGluttenFree, isLactoseFree, isVeganFree]);

  useEffect(() => {
    navigation.setParams({ save: saveFilters });
  }, [saveFilters]);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filters</Text>
      <FilterItem
        name={"Glutten Free"}
        state={isGluttenFree}
        onChange={(newVal) => {
          setisGluttenFree(newVal);
        }}
      />
      <FilterItem
        name={"Lactose Free"}
        state={isLactoseFree}
        onChange={(newVal) => {
          setisLactoseFree(newVal);
        }}
      />
      <FilterItem
        name={"vegan"}
        state={isVeganFree}
        onChange={(newVal) => {
          setisVeganFree(newVal);
        }}
      />
    </View>
  );
};

FiltersScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Filters",
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="menu"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="save"
          iconName="ios-save"
          onPress={navData.navigation.getParam("save")}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  title: {
    fontSize: 22,
    textAlign: "center",
    padding: 10,
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 15,
    padding: 10,
  },
  filterName: {
    fontSize: 18,
  },
});
export default FiltersScreen;
