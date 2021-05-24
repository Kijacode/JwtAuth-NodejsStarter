//mongodb+srv://Kijacode:<password>@auth-hqhzc.mongodb.net/test?retryWrites=true&w=majority

// const dotenv = require("dotenv");
// dotenv.config();
const mongoose = require('mongoose');

console.log('db is here');
var con = mongoose.connect(
	"mongodb+srv://admin:admin7@cluster0.abyky.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
	{ userNewUrlParser: true },
	() => console.log('connect to db')
).then( async () =>{
    await console.log("Database havebeing connected");
    }).catch( (err) =>{
       console.log("Unable to connect to MongoDb");
       console.log(err);
    });
    

module.exports = con;
