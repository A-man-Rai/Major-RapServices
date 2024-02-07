import Form from "../Schema/formSchema.js";

const checkUserApplication = async (req, res) => {

  const userId=req.query.userId;
  try {
 
    const userApplication = await Form.findOne({ userId:userId });

    if (userApplication) {
      res.status(200).json({userApplication,applicationSubmitted:true});
    } else {
      res.status(200).json({ message: 'User application not found'});
    }
  } catch (error) {
    console.error('Error checking user application:', error);
    res.status(500).send('Error checking user application');
  }
};

export default checkUserApplication;
