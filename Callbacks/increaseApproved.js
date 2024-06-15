import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
const increaseCount = async (req,res) => {
  try {

    
    const current = await prisma.records.findFirst({})

    if (current) {
      const newSubmittedValue = current.approved + 1;

      await prisma.records.update({
        where: { id: current.id },
        data: { approved: newSubmittedValue },
      });
      res.status(200).json({
        success: true,
        message: "approved increased",
      });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: "Something went wrong." });
  }
};

export default increaseCount;
