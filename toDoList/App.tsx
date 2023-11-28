import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Header } from "./components/Header";
import { ContentTasks } from "./components/Tasks/ContentTasks";

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <ContentTasks />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0D1117",
    alignItems: "center",
    justifyContent: "center",
  },
});
