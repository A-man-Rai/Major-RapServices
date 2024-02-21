import Form from "../Schema/formSchema.js";
const rejectAppication=async (req, res) => {
  const id = req.params.id; 
  try {
    const existingForm = await Form.findOne({_id:id});
    existingForm.returned="";
    existingForm.status= "REJECTED BY ADMIN";
    const updatedForm = await existingForm.save();
    res.status(200).json({message:"APPLICATION IS REJECTED"});
  } catch (error) {
    console.error('Error updating form:', error);
    res.status(500).json({ message: "Error updating form" });
  }
};

export default rejectAppication;