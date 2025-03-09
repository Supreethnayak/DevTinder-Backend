import express from "express";

const app = express();

// route, request handler
app.get("/", (req, res) => res.send("Im listening!"));

app.get("/test", (req, res) => res.send("Im test!"));

app.get("/contact", (req, res) => res.send("Im contact!"));

app.listen(4000, (req, res) => {
  console.log("listening to the server");
});
