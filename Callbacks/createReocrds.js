import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
const increaseCount = async (req,res) => {
  try {

    const current = await prisma.records.create({
       data :{
        approved:0,
        records:0,
        rejected:0
       }
    });
    
    res.status(200).json({
        success: true,
        message: "successfully created base",
      });
   
  } catch (error) {
    res.status(500).json({ success: false, message: "Something went wrong." });
  }
};

export default increaseCount;
