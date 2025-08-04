import { PrismaClient, Prisma } from "@/generated/prisma";

const prisma = new PrismaClient();

const todos = [
  {
    title: "title",
    code: "const a = 3",
  },
  {
    title: "title 2",
    code: "const b = 3",
  },
];

export async function main() {
  for (const u of todos) {
    await prisma.todos.create({ data: u });
  }
}

main();
