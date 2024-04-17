import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const getAllApplication = async (req, res) => {
  try {
    const userApplications = await prisma.form.findMany({
      where: { returned: "NO" },
    });
     console.log(userApplications);
    res.status(200).json({ userApplications });
  } catch (error) {
    console.error("Error checking user application:", error);
    res.status(500).send("Error checking user application");
  }
};

export default getAllApplication;
