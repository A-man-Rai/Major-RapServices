import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const updateApplication = async (req, res) => {
  const {id,...updateFields}=req.body

  try {
    // Find the document by ID
    const existingForm = await prisma.form.findFirst({ where: { id:parseInt(id)} });
    //console.log(existingForm);
    if (!existingForm) {
      return res.status(404).json({ message: "Form not found" });
    }
    const data = {
      ...updateFields,
      status: "PENDING",
      returned: "UPDATED BY USER",
    };
    const updateForm = await prisma.form.update({ where: { id:parseInt(id) }, data: data });

    res.status(200).json({ updateForm, message: "Application updated" });
  } catch (error) {
    console.error("Error updating form:", error);
    res.status(500).json({ message: "Error updating form" });
  }
};

export default updateApplication;
