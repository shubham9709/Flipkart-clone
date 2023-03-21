import express from "express";
import { Connection } from "./database/db.js";
import DefaultData from "./default.js";
import Router from "./routes/route.js";
import cors from "cors";
import bodyParser from "body-parser";
const app = express();
app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));

app.use('/',Router);

Connection();
app.listen(7000, function () {
  console.log("Server started at port 7000");
});
DefaultData();