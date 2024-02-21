
import Form from "../Schema/formSchema.js";

const returnApplication=async (req, res) => {
  const id = req.params.id; 
  const remarks=req.body.data
  try {
    const existingForm = await Form.findOne({_id:id});
    console.log(existingForm);
    existingForm.returned = "YES";
    existingForm.status="RETURNED BY ADMIN"
    existingForm.remarks=remarks;
    const updatedForm = await existingForm.save();
    res.status(200).json({updatedForm,message:"Application updated"});
  } catch (error) {
    console.error('Error updating form:', error);
    res.status(500).json({ message: "Error updating form" });
  }
};

export default returnApplication;
