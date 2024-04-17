import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const approvedByAdmin = async (req, res) => {
  const id = req.params.id;
  try {
    const existingForm = await prisma.form.update({
      where: { id :parseInt(id)},
      data: { returned: "", status: "APPROVED BY ADMIN" },
    });
    res.status(200).json({ message: "APPLICATION IS APPROVED" });
  } catch (error) {
    console.error("Error updating form:", error);
    res.status(500).json({ message: "Error updating form" });
  }
};

export default approvedByAdmin;
