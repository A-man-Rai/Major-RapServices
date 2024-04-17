import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const returnApplication = async (req, res) => {
  const id = req.params.id;
  const remarks = req.body.data;

  try {
    const existingForm = await prisma.form.update({
      where: { id : parseInt(id)},
      data: {
        returned: "YES",
        status: "RETURNED BY ADMIN",
        remarks,
      },
    });
    res.status(200).json({ existingForm, message: "Application updated" });
  } catch (error) {
    console.error("Error updating form:", error);
    res.status(500).json({ message: "Error updating form" });
  }
};

export default returnApplication;
