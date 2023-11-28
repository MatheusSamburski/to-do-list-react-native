import { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisma";
import { randomUUID } from "crypto"; 
import { z } from "zod";

export async function createNewTask(app: FastifyInstance) {
  app.post("/tasks", async (request) => {
    const createTaskSchema = z.object({
      name: z.string(),
      isCompleted: z.boolean(),
      createdAt: z.string(),
    });

    const { name, isCompleted, createdAt } = createTaskSchema.parse(
      request.body
    );

    const newTask = await prisma.task.create({
      data: { id: randomUUID(), name, isCompleted, createdAt },
    });

    return newTask;
  });
}
