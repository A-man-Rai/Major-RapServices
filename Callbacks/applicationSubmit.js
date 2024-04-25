import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const saveApplication = async (req, res) => {
  try {
    const formData = req.body;
    const newForm = await prisma.form.create({
      data: {
        name: formData.name,
        dob: formData.dob,
        userId: parseInt(formData.userId),
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
      },
    });
 // console.log(newForm);
    const createMany = await prisma.documents.createMany({
      data: [
        { link:formData.urlA ,formId:newForm.id},
        { link:formData.urlB ,formId:newForm.id},
        { link:formData.urlC ,formId:newForm.id},
        { link:formData.urlD ,formId:newForm.id},
      ],
    })
   
    res.status(200).send({
      id: newForm.id,
      message: "Form data   saved successfully",
      submit: true,
    });
  } catch (error) {
    console.error("Error storing form data:", error);
    res.status(500).send("Error storing form data");
  }
};

export default saveApplication;
