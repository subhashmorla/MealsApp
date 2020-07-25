import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Colors from "../constants/Colors";

const GridTile = (props) => {
  return (
    <TouchableOpacity
      style={{ ...styles.gridItem, ...{ backgroundColor: props.item.color } }}
      onPress={props.onClick}
    >
      <View>
        <Text style={styles.title}>{props.item.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 12,
    padding: 10,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 12,
    elevation: 3,
  },
  title: {
    fontSize: 18,
  },
});
export default GridTile;
