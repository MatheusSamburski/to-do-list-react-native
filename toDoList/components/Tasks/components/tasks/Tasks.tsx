import { StyleSheet, Text, View } from "react-native";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { http } from "../../../../axios/axios";
import { useState } from "react";
import { ModalCongratulation } from "../modal-congratulation/ModalCongratulation";

export function Tasks({ name, isCompleted, id }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  async function handleIsCompletedTask(id) {
    setModalIsOpen(true);
    await http.put(`/tasks/${id}/isCompleted`, { isCompleted: true });
  }

  async function handleDeleteTask(id) {
    console.log(id);
    await http.delete(`/tasks/${id}`);
  }

  return (
    <View style={styles.task}>
      <AntDesign
        name="checkcircleo"
        size={24}
        color="green"
        onPress={() => handleIsCompletedTask(id)}
      />
      <Text style={isCompleted ? styles.teste : styles.titleTask}>{name}</Text>
      <FontAwesome
        name="trash-o"
        size={24}
        color="red"
        onPress={() => handleDeleteTask(id)}
      />

      {modalIsOpen && (
        <ModalCongratulation
          modalIsOpen={modalIsOpen}
          setModalIsOpen={setModalIsOpen}
        />
      )}
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
  teste: {
    fontSize: 18,
    color: "#E6EDF3",
    textDecorationLine: "line-through",
    textDecorationColor: "#008000",
  },
  titleTaskComplete: {
    fontSize: 18,
    color: "#E6EDF3",
    textDecorationStyle: "dotted",
  },
});
