import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const updateImageLink = async (req, res) => {
  const id = req.params.id;
  //console.log(id);
  //console.log(req.body.url);
  const link=req.body.url
console.log(req.data);
  try {
    const existingForm = await prisma.documents.update({
      where: { id :parseInt(id)},
      data: { link},
    });
    console.log(existingForm);
    res.status(200).json({ message: "Image Link is Updated" ,existingForm});
  } catch (error) {
    console.error("Error updating form:", error);
    res.status(500).json({ message: "Error updating form" });
  }
};

export default updateImageLink;
