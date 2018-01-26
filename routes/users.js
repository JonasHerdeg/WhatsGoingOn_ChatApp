const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const fs = require('fs');

const config = require('../config/database');
const User = require('../models/user');
var imgPath = './defaultUser/user.png';

// Register
router.post('/register', (req, res, next) => {
	let newUser = new User({
		name: req.body.name,
		email: req.body.email,
		username: req.body.username,
		password: req.body.password,
		img :{data: fs.readFileSync(imgPath),
		contentType : 'image/png' }
	});

	User.addUser(newUser, (err, user) => {
		if (err) {
			res.json({success: false, msg:'Failed to register user'});
		} else {
			res.json({success: true, msg:'User registered'});
		}
	});
});

// Authenticate
router.post('/authenticate', (req, res, next) => {
	const username = req.body.username;
	const password = req.body.password;

	User.getUserByUsername(username, (err, user) => {
		if (err) throw err;
		if (!user) {
			return res.json({success: false, msg: 'User not found'});
		}

		User.comparePassword(password, user.password, (err, isMatch) => {
			if (err) throw err;
			if (isMatch) {
				const token = jwt.sign({data: user}, config.secret, {
					expiresIn: 604800
				});

				res.json({
					success:true,
					token:'JWT '+token,
					user:{
						id: user._id,
						name: user.name,
						username: user.username,
						email: user.email,
						img: user.img
					}
				});
			} else {
				return res.json({success: false, msg: 'Wrong Password'});
			}
		});

	});
});

// Profile
router.post('/profile', (req, res, next) => {
	const username1 = req.body.username;
	const img = req.body.img.data;
	const update = {img:{data: img}};
	User.findOne({username: username1}).then((user) =>{
		return Object.assign(user, update);
	}).then((user, ) => {
		user.save((err)=>{
			if (err) {
				res.json({success:false, msg: 'Image might be too large! Choose one in lower resolution (max. 16KB supported)'});
			} else {
				res.json({success:true, msg: 'Successfully saved!'});
			}
		});
	});
});

// Userprofile
router.post('/userprofile', (req,res,next)=>{
	const username = req.body.username;
	User.getUserByUsername(username, (err, user) => {
		if (err) {throw err}
		if (!user) {
			return res.json({success: false, msg: 'User not found'});
		}

		res.json({
			user:{
				id: user._id,
				name: user.name,
				username: user.username,
				email: user.email,
				img: user.img
				}
		});

	});
});


module.exports = router;