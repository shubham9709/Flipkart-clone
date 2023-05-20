// import express from "express";
// import { Connection } from "./database/db.js";
// import DefaultData from "./default.js";
// import Router from "./routes/route.js";
// import cors from "cors";
// import bodyParser from "body-parser";
const express = require("express");
const Connection = require("./database/db.js");
const DefaultData = require("./default.js");
const cors = require("cors");
const Router = require("./routes/route.js");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", Router);
app.use(express.static("public"));

//AWS connection begins
const _dirname = path.dirname("");
const buildPath = path.join(_dirname, "../flipkart/build");

app.use(express.static(buildPath));

app.get("/*", function (req, res) {
  res.sendFile(
    path.join(__dirname, "../flipkart/build/index.html"),
    function (err) {
      if (err) {
        console.log(err.message);
        res.status(500).send(err);
      }
    }
  );
});
//AWS connection ends
Connection();
app.listen(7000, function () {
  console.log("Server started at port 7000");
});
DefaultData();
