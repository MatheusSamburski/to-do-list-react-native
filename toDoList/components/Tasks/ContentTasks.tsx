import { StyleSheet, Text, View } from "react-native";
import { Tasks } from "./components/tasks/Tasks";
import { useEffect, useState } from "react";
import { http } from "../../axios/axios";
import { AxiosResponse } from "axios";
import FormNewTask from "./components/form-new-task/FormNewTask";
import { Task } from "../../types/Task";

export function ContentTasks() {
  const [tasks, setTasks] = useState<Task[]>([]);

  async function getTasks() {
    const response: AxiosResponse = await http.get("/tasks");
    const data = response.data;
    setTasks(data);
  }

  useEffect(() => {
    getTasks();
  }, [tasks]);

  const tasksCompleted = tasks.filter((task) => task.isCompleted === true);

  return (
    <View style={styles.main}>
      <FormNewTask setTasks={setTasks} />

      <View style={styles.details}>
        <Text style={styles.titleDetail}>Tarefas criadas: {tasks.length}</Text>
        <Text style={styles.titleDetail}>
          Tarefas concluídas:
          {tasksCompleted.length}
        </Text>
      </View>

      <View style={styles.containerTasks}>
        {tasks.map((task) => {
          return (
            <Tasks
              key={task.id}
              id={task.id}
              name={task.name}
              isCompleted={task.isCompleted}
            />
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    display: "flex",
    flexDirection: "column",
  },
  details: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  titleDetail: {
    fontSize: 14,
    color: "#BEC5CB",
    marginTop: 5,
    marginBottom: 5,
  },
  containerTasks: {
    height: 300,
    overflow: "scroll",
    display: "flex",
    flexDirection: "column",
  },
  form: {
    display: "flex",
    flexDirection: "row",
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
    height: 25,
  },
  button: {
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
