// TODO: check the docs of dotenv and how to use it with .env file
import("dotenv").config();
import("express-async-errors");

import express from "express";

const app = express();

app.get("/ping", (req, res) => {
  res.send("<h1>Pong.. Projects API</h1>");
});

// middleware
// TODO: use middleware

const PORT = process.env.PORT;

const start = async () => {
  try {
    // TODO: start the server
  } catch (error) {
    console.log(error);
  }
};
