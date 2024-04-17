import express from "express";
import getAllApplication from "../Callbacks/getAllApplication.js";
import getAllReturnedApplication from "../Callbacks/getAllReturnedApplication.js";
import getAllUserApplication from "../Callbacks/getAllUserApplication.js";
import verifyAdmin from "../middleware/verifyAdmin.js";
import verifyToken from "../middleware/verifyToken.js";

const router = express.Router();

router.get("/",verifyAdmin,getAllApplication); //get all pending applications for admin
router.get("/returned",verifyAdmin, getAllReturnedApplication); // get all application returned for admin
router.get("/:id", verifyToken,getAllUserApplication); // get all details of a particular application

export default router;
