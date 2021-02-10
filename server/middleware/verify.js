import jwt from "jsonwebtoken";

const SECRET = process.env.secret;

const verify = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];

    // > 500 will be Google Oauth
    const isManualAuth = token.length < 500;

    let decodedData;

    if (token && isManualAuth) {
      decodedData = jwt.verify(token, SECRET);

      req.userId = decodedData?.id;
    } else {
      decodedData = jwt.decode(token);

      req.userId = decodedData?.sub;
    }

    next();
  } catch (error) {
    res.status(400).send("Invalid token");
  }
};

export default verify;
