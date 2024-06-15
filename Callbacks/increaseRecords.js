import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
const increaseCount = async (req,res) => {
  try {


    const current = await prisma.records.findFirst({})
 
    if (current) {
      const newSubmittedValue = current.records + 1;

      const update =await prisma.records.update({
        where: { id: current.id },
        data: { records: newSubmittedValue },
      });
     
      res.status(200).json({
        success: true,
        message: "records increased",
      });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ success: false, message: "Something went wrong." });
  }
};

export default increaseCount;
