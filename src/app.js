import express from "express";
import { connectDb } from "./config/database.js";
import User from "./models/user.js";
const app = express();

app.post("/signup", async (re, res) => {
  const userDetail = {
    firstName: "Supreeth",
    lastName: "Nayak",
    email: "example@gmail.com",
    password: "password",
    age: 23,
    gender: "male",
  };

  try {
    // because it returns a promise
    await new User(userDetail).save();
    res.send("User created");
  } catch (error) {
    res.status(400).send("Error while creating user", error);
    console.log(error);
  }
});

connectDb()
  .then(() => {
    console.log("success");
    app.listen(4000, (req, res) => {
      console.log("listening to the server");
    });
  })
  .catch(() => console.log("error"));
