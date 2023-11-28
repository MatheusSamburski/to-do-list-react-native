import { StyleSheet, Text, View } from "react-native";

export function Header() {

  

  return (
    <View style={styles.header}>
      <Text style={styles.title}>TO-DO LIST</Text>
      <Text style={styles.paragraph}>Adicione uma tarefa...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    color: "#2E7DEE",
  },
  paragraph: {
    fontSize: 14,
    color: "#BEC5CB",
    marginTop: 10,
  }
});
