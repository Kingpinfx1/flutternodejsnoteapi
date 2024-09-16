const express = require('express');
const mongoose = require('mongoose');
const Note = require('./models/note');
const noteRoute = require("./routes/note.route.js");
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));
// app.use(bodyParser.urlencoded({extended:false}));
// app.use(bodyParser.json());



// routes
app.use("/api/notes", noteRoute);

app.get("/", (req, res) => {
  res.send("Hello from Node API Server Updated");
});

const PORT = process.env.PORT || 3000;
mongoose
  .connect(
    "mongodb+srv://kingsley:Sureforall2@ecommerce.xxdxee0.mongodb.net/"
  )
  .then(() => {
    console.log("Connected to database!");
    app.listen(PORT, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("Connection failed!");
  });