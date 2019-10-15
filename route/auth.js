import { Router } from 'express';
const TOKEN = "JLKJLAJFLAJLAAL";
// const AdminController = require("../controllers/admin");
import { sign } from "jsonwebtoken";
const router = Router();
import User, { findOne } from '../Model/User';
import { registrationValidation, loginValidation } from '../db/validitation';
import { genSalt, hash, compare } from 'bcryptjs';

router.post('/register', async (req, res) => {
	const { error } = registrationValidation(req.body);

	if (error) return res.status(400).send(error.details[0].message);

	const emailExist = await findOne({ email: req.body.email });
	if (emailExist) return res.status(400).send('Emain alreald exists');

	//HASH PASSWORD
	const salt = await genSalt(10);
	const hashPassword = await hash(req.body.password, salt);

	const user = new User({
		name: req.body.name,
		email: req.body.email,
		password: hashPassword
	});

	try {
    const userSave = await user.save();
    //choose to return just id of the saved user
		res.send({ user: user._id });
	} catch (err) {
		res.status(404).send('kijacode kill it');
		console.log(err);
	}
});

router.post('/login', async (req, res) => {
  //validate data before we use
	const { error } = loginValidation(req.body);

  if (error) return res.status(400).send(error.details[0].message);
  
  //check if user exists
  const user= await findOne({ email: req.body.email });
  if (!user) return res.status(400).send('Email or Password not exist');
  
  //PASSWORD IS CORRECT

  const validPassword = await compare(req.body.password,user.password);

  if(!validPassword) return res.status(400).send("Email or Password not exist");



  //create and assign the token

  const token = sign({_id:user.__id},TOKEN);

  res.header("auth_token",token).send(token);

  // res.send("Log in ");
});

export default router;

//Kijacode
//7864drftgh4536cxvds33
