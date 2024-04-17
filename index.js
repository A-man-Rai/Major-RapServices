import express from "express";
import router from "./Routes/mainRouter.js";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: process.env.CLIENT,
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));





app.use("/", router);


const PORT = process.env.PORT || 9001;

app.listen(PORT, () => {
  console.log("RAP SERVICE STARTED AT PORT " + PORT);
});
