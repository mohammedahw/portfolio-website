import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../prisma/prisma.service";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const projects = await prisma.project.findMany({
    include: {
      blog: true,
    },
  });
  return res.status(200).json(projects);
}
