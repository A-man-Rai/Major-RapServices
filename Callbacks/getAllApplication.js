
import Form from "../Schema/formSchema.js";
const getAllApplication = async (req, res) => {

 
  try {
 
   const userApplications = await Form.find({ returned: "NO" });

      res.status(200).json({userApplications});
   
  } catch (error) {
    console.error('Error checking user application:', error);
    res.status(500).send('Error checking user application');
  }
};

export default getAllApplication
