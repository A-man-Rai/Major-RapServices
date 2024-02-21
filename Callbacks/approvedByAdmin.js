
import Form from "../Schema/formSchema.js";

const approvedByAdmin=async (req, res) => {
  const id = req.params.id; 
  try {
    const existingForm = await Form.findOne({_id:id});
    existingForm.returned="";
    existingForm.status = "APPROVED BY ADMIN";
    const updatedForm = await existingForm.save();
    res.status(200).json({message:"APPLICATION IS APPROVED"});
  } catch (error) {
    console.error('Error updating form:', error);
    res.status(500).json({ message: "Error updating form" });
  }
};

export default approvedByAdmin;
