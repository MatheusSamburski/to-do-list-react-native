import { StyleSheet, TextInput, View } from "react-native";
import { Tasks } from "./Tasks";
import { useEffect, useState } from "react";
import { http } from "../../axios/axios";
import { AxiosResponse } from "axios";

interface Task {
  id: string;
  name: string;
  isCompleted: boolean;
  createdAt: string;
}

export function ContentTasks() {
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState<Task[]>([]);
  console.log(newTask);

  useEffect(() => {
    async function getTasks() {
      const response: AxiosResponse = await http.get("/tasks");
      const data = response.data;
      setTasks(data);
    }

    getTasks();
  }, []);

  return (
    <View style={styles.main}>
      <TextInput
        style={styles.input}
        onChangeText={(event) => setNewTask(event)}
        placeholder="Digite uma tarefa"
        keyboardType="default"
      />
      {tasks.map((task) => {
        return (
          <Tasks
            key={task.id}
            name={task.name}
            isCompleted={task.isCompleted}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    display: "flex",
    flexDirection: "column",
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
    height: 25,
  },
});
