import express from "express";
import db from "./database/db.js";
import cors from "cors";
import Routes from "./routes/route.js";
const PORT = 8000;
const app = express();
import bodyParser from "body-parser";


app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json({extended:true}))
app.use(cors());
app.use("/", Routes);







app.listen(PORT, () =>
  console.log(`Server is running successfully on PORT ${PORT}`)
);
