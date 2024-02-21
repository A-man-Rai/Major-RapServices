
import Form from "../Schema/formSchema.js";

const updateApplication=async (req, res) => {
  const id = req.body.id;
  try {
    // Find the document by ID
    const existingForm = await Form.findOne({_id:id});
    existingForm.status="PENDING";
    existingForm.returned="UPDATED BY USER";
    if (!existingForm) {
      return res.status(404).json({ message: "Form not found" });
    }

    // Update each field in the document based on the request body
    for (const key in req.body) {
      if (key in existingForm) {
        existingForm[key] = req.body[key];
      }
    }

    // Save the updated document
    const updatedForm = await existingForm.save();
    res.status(200).json({updatedForm,message:"Application updated"});
  } catch (error) {
    console.error('Error updating form:', error);
    res.status(500).json({ message: "Error updating form" });
  }
};

export default updateApplication;
