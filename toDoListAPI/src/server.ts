import { fastify } from "fastify";
import { fastifyCors } from "@fastify/cors";
import { getAllTasks } from "./routes/get-all-tasks";
import { createNewTask } from "./routes/create-new-task";
import { deleteTask } from "./routes/delete-task";
import { updateIsCompletedTask } from "./routes/update-is-completed-task";

const app = fastify();

app.register(fastifyCors, {
  origin: "*",
});

app.register(getAllTasks);
app.register(createNewTask);
app.register(deleteTask);
app.register(updateIsCompletedTask);

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log("Server is running on url: http://localhost:3333");
  });
