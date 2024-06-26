import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const deleteApplication = async (req, res) => {
  const id = req.params.id;
  try {
    const existingForm = await prisma.form.delete({ where: { id :parseInt(id)} });
    if (existingForm) {
      res
        .status(200)
        .json({ message: `Form with ID ${id} has been deleted successfully` });
    } else {
      res.status(404).json({ message: `Form with ID ${id} not found` });
    }
  } catch (error) {
    console.error("Error deleting form:", error);
    res
      .status(500)
      .json({ message: "An error occurred while deleting the form" });
  }
};

export default deleteApplication;
