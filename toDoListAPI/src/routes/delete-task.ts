import { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisma";
import { z } from "zod";

export async function deleteTask(app: FastifyInstance) {
  app.delete("/tasks/:id", async (request) => {
    const deletedTaskSchema = z.object({
      id: z.string().uuid(),
    });

    const { id } = deletedTaskSchema.parse(request.params);

    const deletedTask = await prisma.task.delete({ where: { id } });

    return deletedTask;
  });
}
