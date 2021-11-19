// Dependencies

var express = require("express");
var path = require("path");
const fs = require("fs");
const exp = require("constants");

// Sets up and initializes the Express App server
var app = express();
// Sets an initial port, use later in listener
var PORT = process.env.PORT || 3001;

// Middleware sets up the Express app to find/use files and handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

