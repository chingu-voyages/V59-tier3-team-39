import prisma from "../lib/prisma";

export const resolvers = {
  Query: {
    role: async (_: unknown, { id }: { id: string }) => {
      const role = await prisma.role.findUnique({
        where: { id },
        include: {
          questions: {
            include: { options: true },
          },
        },
      });

      if (!role) return null;

      return {
        id: role.id,
        name: role.name,
        questions: role.questions.map((q) => ({
          id: q.id,
          text: q.text,
          hint: q.hint,
          correctOptionId: q.correct_option_id,
          options: q.options.map((o) => ({
            id: o.option_id,
            text: o.text,
            feedback: o.feedback,
          })),
        })),
      };
    },
  },
};
