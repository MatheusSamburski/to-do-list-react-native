import { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisma";
import { z } from "zod";

export async function updateIsCompletedTask(app: FastifyInstance) {
  app.put("/tasks/:id/isCompleted", async (request) => {
    const paramSchema = z.object({
      id: z.string().uuid(),
    });

    const { id } = paramSchema.parse(request.params);

    const createIsCompletedSchema = z.object({
      isCompleted: z.boolean(),
    });

    const { isCompleted } = createIsCompletedSchema.parse(request.body);

    const updatedTask = await prisma.task.update({
      where: { id },
      data: { isCompleted },
    });

    return updatedTask;
  });
}
