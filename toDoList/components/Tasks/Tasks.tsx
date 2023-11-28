import { StyleSheet, Text, View } from "react-native";
import { AntDesign, FontAwesome } from "@expo/vector-icons";

export function Tasks({ name, isCompleted }) {
  return (
    <View style={styles.task}>
      <AntDesign name="checkcircleo" size={24} color="green" />
      <Text style={styles.titleTask}>{name}</Text>
      <FontAwesome name="trash-o" size={24} color="red" />
    </View>
  );
}

const styles = StyleSheet.create({
  task: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 20,
    marginTop: 10,
    marginBottom: 10,
    alignItems: "center",
  },
  titleTask: {
    fontSize: 18,
    color: "#E6EDF3",
  },
  titleTaskComplete: {
    fontSize: 18,
    color: "#E6EDF3",
    textDecorationStyle: "dotted",
  },
});
