import express from "express";
import applicationRouter from "./applicationRouter.js";
import saveApplication from "../Callbacks/applicationSubmit.js";
import updateApplication from "../Callbacks/updateApplication.js";
import deleteApplication from "../Callbacks/deleteApplication.js";
import returnApplication from "../Callbacks/returnApplication.js";
import approvedByAdmin from "../Callbacks/approvedByAdmin.js";
import rejectAppication from "../Callbacks/rejectApplication.js";
import verifyToken from "../middleware/verifyToken.js";
import verifyAdmin from "../middleware/verifyAdmin.js";
import getLinks from "../Callbacks/getImageLinks.js";
import getAllApproved from "../Callbacks/getApproved.js"
import updateImageLink from "../Callbacks/updateImageLink.js";
import convertPdf  from "../Callbacks/convertPdf2.js"
import increaseApproved from "../Callbacks/increaseApproved.js"
import increaseRecords from "../Callbacks/increaseRecords.js"
import increaseRejected from "../Callbacks/increaseReject.js"
import getAllCount from "../Callbacks/getAllCounts.js"
import notify from "../Callbacks/notify.js";
const router = express.Router();

router.use("/applications", applicationRouter);
router.get('/approved',verifyAdmin,getAllApproved);
router.patch("/return/:id",returnApplication); //select application as returned for admin //done
router.patch("/reject/:id", verifyAdmin,rejectAppication); //mark application as rejected for admin  //done
router.patch("/approved/:id", verifyAdmin, approvedByAdmin); //mark application as approved for admin //done
router.delete("/delete/:id", verifyAdmin, deleteApplication); //delete the application from the database for admin //done

router.post("/submit", verifyToken, saveApplication); // submit application for user  //done
router.patch("/update",updateApplication); // update submitted applications for user
router.get("/links/:id",getLinks)
router.patch("/links/:id",verifyToken,updateImageLink)

router.post("/pdf",verifyAdmin,convertPdf)

router.post("/records",increaseRecords)
router.post("/approved",increaseApproved)
router.post("/rejected",increaseRejected)
router.get("/all",getAllCount)
router.post("/notify",notify)
//router.post("/records",baseForRecords)

export default router;
