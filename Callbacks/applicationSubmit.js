import Form from "../Schema/formSchema.js";


const saveApplication = async (req, res) => {
  try {
    const formData  = req.body;
    const newForm = new Form({
      name: formData.name,
      dob: formData.dob,
      userId:formData.userId,
      nationality: formData.nationality,
      occupation: formData.occupation,
      passportNo: formData.passportNo,
      passportDateOfIssue: formData.dateOfIssue,
      passportValidUpto: formData.validUpTo,
      ilpNo: formData.ilpNo,
      visaNo: formData.visaNo,
      visaIssue: formData.visaIssue,
      visaValidUpto: formData.visaValidUpto,
      residentialAddress: formData.residentialAddress,
      dateOfVisit: formData.dateOfVisit,
      durationOfStay: formData.durationOfStay,
      travelArrangementBy: formData.travelArrangement,
      returned:"NO",
      status:"PENDING",
    });

    const savedForm = await newForm.save();
     console.log("saved");
    res.status(200).send({id:savedForm._id, message:'Form data with images saved successfully',submit:true});
  } catch (error) {
    console.error('Error storing form data with images:', error);
    res.status(500).send('Error storing form data with images');
  }
};

export default saveApplication;
