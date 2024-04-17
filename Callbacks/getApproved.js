import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getAllApproved = async (req, res) => {
  try {
  
    const userApprovedApplications = await prisma.form.findMany({
      where:{ status: "APPROVED BY ADMIN" }

    });
    
    res.status(200).json({ userApprovedApplications });
  } catch (error) {
    console.error("Error checking user application:", error);
    res.status(500).send("Error checking user application");
  }
};

export default getAllApproved;