//mongodb+srv://Kijacode:<password>@auth-hqhzc.mongodb.net/test?retryWrites=true&w=majority

// const dotenv = require("dotenv");
// dotenv.config();
import { connect } from "mongoose";
const dotenv = require('dotenv'); 
dotenv.config()

console.log("db is here");
var con = connect(
  process.env.DB_CONNECT,
  err => {
    if (err) {
      console.log(err);
    } else {
      console.log("connect to db");
    }
  }
)
  .then(async () => {
    console.log("Database has been connected");
  })
  .catch(err => {
    console.log("Unable to connect to MongoDb");
    console.log(err);
  });

export default con;
