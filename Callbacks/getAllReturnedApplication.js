import Form from "../Schema/formSchema.js";

const getAllReturnedApplication = async (req, res) => {
  try {
    const userReturnedApplications = await Form.find({ returned: { $in: ["YES", "UPDATED BY USER"] } });
    res.status(200).json({ userReturnedApplications });
  } catch (error) {
    console.error('Error checking user application:', error);
    res.status(500).send('Error checking user application');
  }
};

export default getAllReturnedApplication;
