const express =
  require("express");

const bcrypt =
  require("bcryptjs");

const jwt =
  require("jsonwebtoken");

const Student =
  require("../models/Student");
  
const router =
  express.Router();

const auth =
  require("../middleware/auth");

// DASHBOARD
router.get("/dashboard",
auth,
(req, res) => {

  res.json({
    message:
      "Welcome Student"
  });

});


// REGISTER

router.post("/register",
async (req, res) => {

  try {

    const {
      name,
      email,
      password
    } = req.body;

    const existingStudent =
      await Student.findOne({
        email
      });

    if(existingStudent) {

      return res.json({
        message:
          "Student already exists"
      });

    }

    const hashedPassword =
      await bcrypt.hash(
        password,
        10
      );

    const newStudent =
      new Student({

        name,
        email,
        password:
          hashedPassword

      });

    await newStudent.save();

    res.json({
      message:
        "Registration Successful"
    });

  } catch(error) {

    console.log(error);

  }

});


// LOGIN

router.post("/login",
async (req, res) => {

  try {

    const {
      email,
      password
    } = req.body;

    const student =
      await Student.findOne({
        email
      });

    if(!student) {

      return res.json({
        message:
          "Student not found"
      });

    }

    const isMatch =
      await bcrypt.compare(
        password,
        student.password
      );

    if(!isMatch) {

      return res.json({
        message:
          "Invalid Password"
      });

    }

    const token =
      jwt.sign(

        {
          id: student._id
        },

        process.env.JWT_SECRET,

        {
          expiresIn: "1d"
        }

      );

    res.json({

      message:
        "Login Successful",

      token

    });

  } catch(error) {

    console.log(error);

  }

});

module.exports = router;