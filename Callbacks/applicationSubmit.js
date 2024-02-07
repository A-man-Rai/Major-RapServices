import Form from "../Schema/formSchema.js";
import { convertImageToBuffer } from "../helper/handleImage.js";

const saveApplication = async (req, res) => {
  try {
    const formData  = req.body;
    const passphotoBuffer = await convertImageToBuffer(formData.passphoto);
    const signatureBuffer = await convertImageToBuffer(formData.signature);
    const passportBuffer = await convertImageToBuffer(formData.passport);
    const visaBuffer = await convertImageToBuffer(formData.visa);
  
    const newForm = new Form({
      name: formData.name,
      dob: formData.dob,
      userId:formData.userId,
      nationality: formData.nationality,
      occupation: formData.occupation,
      passportNo: formData.passportNo,
      passportdateOfIssue: formData.passportdateOfIssue,
      passportValidUpto: formData.passportValidUpto,
      ilpNo: formData.ilpNo,
      visaNo: formData.visaNo,
      visaIssue: formData.visaIssue,
      visaValidUpto: formData.visaValidUpto,
      residentialAddress: formData.residentialAddress,
      dateOfVisit: formData.dateOfVisit,
      durationOfStay: formData.durationOfStay,
      travelArrangementBy: formData.travelArrangementBy,
      passphoto: {
        data: passphotoBuffer,
        contentType: formData.passphoto.type,
      },
      signature: {
        data: signatureBuffer,
        contentType: formData.signature.type,
      },
      passport: {
        data: passportBuffer,
        contentType: formData.passport.type,
      },
      visa: {
        data: visaBuffer,
        contentType: formData.visa.type,
      },
    });

    const savedForm = await newForm.save();
     console.log("saved");
    res.status(200).send({message:'Form data with images saved successfully',submit:true});
  } catch (error) {
    console.error('Error storing form data with images:', error);
    res.status(500).send('Error storing form data with images');
  }
};

export default saveApplication;
