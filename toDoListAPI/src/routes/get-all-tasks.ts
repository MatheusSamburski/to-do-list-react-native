import { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisma";

export async function getAllTasks(app: FastifyInstance) {
  app.get("/tasks", async () => {
    const prompts = await prisma.task.findMany();

    return prompts;
  });
}