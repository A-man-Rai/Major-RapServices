import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getAllReturnedApplication = async (req, res) => {
  try {
  
    const userReturnedApplications = await prisma.form.findMany({
      where: { OR: [
        { returned: "YES" },
        { returned: "updated by user" }
      ] },
    });
    
    res.status(200).json({ userReturnedApplications });
  } catch (error) {
    console.error("Error checking user application:", error);
    res.status(500).send("Error checking user application");
  }
};

export default getAllReturnedApplication;
