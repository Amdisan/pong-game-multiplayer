const express = require("express");

const api = express();

const path = require("path");

api.use(express.static(path.join(__dirname, "public"))); //access to public folder

api.use("/", express.static("index.html"));

module.exports = api;
