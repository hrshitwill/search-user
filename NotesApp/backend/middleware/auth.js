const jwt =
  require("jsonwebtoken");

function auth(req, res, next) {

  try {

    const token =
      req.header("token");

    if(!token) {

      return res.json({
        message:
          "No Token"
      });

    }

    const verified =
      jwt.verify(
        token,
        process.env.JWT_SECRET
      );

    req.student = verified;

    next();

  } catch(error) {

    console.log(error);

  }

}

module.exports = auth;