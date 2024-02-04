import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { AxiosResponse } from "axios";
import { http } from "../../../../axios/axios";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Task } from "../../../../types/Task";

interface FormNewTaskProps {
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

export default function FormNewTask({ setTasks }: FormNewTaskProps) {
  const [newTask, setNewTask] = useState("");

  async function handlePostNewTask() {
    if (newTask !== "") {
      const response: AxiosResponse = await http.post("/tasks", {
        id: uuidv4(),
        name: newTask,
        isCompleted: false,
        createdAt: new Date(),
      });

      if (response.data) {
        setTasks((prevState) => [...prevState, response.data]);
        setNewTask("");
      }
    }
  }

  return (
    <>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          onChangeText={(event) => setNewTask(event)}
          placeholder="Digite uma tarefa"
          keyboardType="default"
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => handlePostNewTask()}
        >
          <Text style={styles.text}>Adicionar</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  form: {
    display: "flex",
    flexDirection: "row",
    gap: 5,
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    marginTop: 10,
    marginBottom: 10,
    borderColor: "gray",
    backgroundColor: "white",
    borderRadius: 8,
    borderWidth: 1,
    padding: 8,
    fontSize: 18,
    height: 35,
  },
  button: {
    height: 35,
    backgroundColor: "#4CAF50",
    padding: 10,
    borderRadius: 5,
  },
  text: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
});
