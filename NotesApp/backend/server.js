require("dotenv").config();

const express =
  require("express");

const mongoose =
  require("mongoose");

const cors =
  require("cors");

const authRoutes =
  require("./routes/authRoutes");

const app = express();

app.use(cors());

app.use(express.json());

mongoose.connect(
  process.env.MONGO_URL
)
.then(() => {

  console.log(
    "MongoDB Connected"
  );

})
.catch((error) => {

  console.log(error);

});

app.use(
  "/api/auth",
  authRoutes
);

app.listen(3000, () => {

  console.log(
    "Server Running"
  );

});