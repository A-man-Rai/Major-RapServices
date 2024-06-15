import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
const increaseCount = async (req,res) => {
  try {

    const current = await prisma.records.findFirst({})
  //console.log(current);
    if (current) {
      const newSubmittedValue = current.rejected+ 1;

      const update =await prisma.records.update({
        where: { id: current.id },
        data: { rejected: newSubmittedValue },
      });
      console.log(update);
      res.status(200).json({
        success: true,
        message: "reject increased",
      });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: "Something went wrong." });
  }
};

export default increaseCount;
