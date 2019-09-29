const jwt = require("jsonwebtoken");
const TOKEN = "JLKJLAJFLAJLAAL";


function  auth(req,res,next) {

  const token = req.header("auth-token");

  if(!token) return res.status(401).send("Acesss Denied");



  try
  {
     const verified = jwt.verify(token,TOKEN);
     req.user = verified;
     next();
  }catch(err)
  {
  res.status(400).send("Invalid Token");
  }

}

module.exports = auth;