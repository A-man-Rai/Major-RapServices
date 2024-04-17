import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getLinks = async (req, res) => {
  const id = req.params.id;
  try {
    const userImages= await prisma.documents.findMany({
      where: { formId: parseInt(id) },
    });
    res.status(200).json({ userImages });
  } catch (error) {
    console.error("Error checking user image links:", error);
    res.status(500).send("Error checking user images links");
  }
};

export default getLinks;
