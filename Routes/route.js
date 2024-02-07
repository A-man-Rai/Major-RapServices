import express from "express";
import saveApplication from "../Callbacks/applicationSubmit.js";
import checkUserApplication from "../Callbacks/checkUserApplication.js";
const router = express.Router();

router.post("/submit",saveApplication);
router.get("/check",checkUserApplication);

export default router;
