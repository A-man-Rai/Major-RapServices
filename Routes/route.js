import express from "express";
import saveApplication from "../Callbacks/applicationSubmit.js";
import getAllApplication from "../Callbacks/getAllApplication.js";
import updateApplication from "../Callbacks/updateApplication.js";
import deleteApplication from "../Callbacks/deleteApplication.js";
import getAllReturnedApplication from "../Callbacks/getAllReturnedApplication.js";
import returnApplication from "../Callbacks/returnApplication.js";
import approvedByAdmin from "../Callbacks/approvedByAdmin.js";
import rejectAppication from "../Callbacks/rejectApplication.js";
import getAllUserApplication from "../Callbacks/getAllUserApplication.js";
import { verifyToken } from "../Callbacks/verifyToken.js";

const router = express.Router();

router.get("/applications",getAllApplication); //get all pending applications for admin 
router.get("/applications/returned",getAllReturnedApplication); // get all application returned for admin

router.patch("/return/:id",returnApplication); //select application as returned for admin
router.patch("/reject/:id",rejectAppication); //mark application as rejected for admin
router.patch("/approved/:id",approvedByAdmin);//mark application as approved for admin
router.delete('/delete/:id',deleteApplication);//delete the application from the database for admin

router.post("/submit",verifyToken,saveApplication);  // submit application for user
router.patch("/update",verifyToken,updateApplication);  // update submitted applications for user
router.get("/applications/:id",verifyToken,getAllUserApplication); // get all details of a particular application



export default router;
