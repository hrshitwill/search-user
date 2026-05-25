const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

let notes = [
  "Learn React",
  "Learn Express"
];

// GET notes
app.get("/notes", (req, res) => {
    res.send("Hello from the server!");
  res.json(notes);

});

// POST note
app.post("/notes", (req, res) => {const { note } = req.body;

  notes.push(note);

  res.json({
    success: true,
    notes
  });

});

app.listen(3000, () => {

  console.log("Server running on port 3000");

});