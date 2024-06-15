import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
const getAll = async (req,res) => {
  try {

    const current = await prisma.records.findFirst({});
 
      res.status(200).json({
        current,
        success: true,
      });
    
  } catch (error) {
    res.status(500).json({ success: false, message: "Something went wrong." });
  }
};

export default getAll;
