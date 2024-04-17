import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getAllUserApplication = async (req, res) => {
  const id = req.params.id;
  try {
    const userApplications = await prisma.form.findMany({
      where: { userId: parseInt(id) },
    });
    res.status(200).json({ userApplications });
  } catch (error) {
    console.error("Error checking user application:", error);
    res.status(500).send("Error checking user application");
  }
};

export default getAllUserApplication;
