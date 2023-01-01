//this is connected with routes auth.js

import { db } from "../db.js"
//for password
import bcrypt from'bcryptjs';
//to be identifeid/ sure/authentic TO delete own post not other going in Applicaton, Indexdb or Session
import jwt from "jsonwebtoken";


export const register = (req,res) =>{

    //CHECK FOR EXISTING USER
    const q = 'SELECT * FROM users WHERE email = ? OR username = ?';
    db.query(q, [req.body.email,req.body.name], (err,data)=>{
        //if error Exist
        if(err) 
            return res.json(err);
        //if data/ Exist..409=status is true
        if(data.lenght) 
            return res.status(409).json("User already exists!"); 
            
            //password check
            //Hash the password and create a User
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt); 
        
        //Inserting values
        const q ='INSERT INTO users(`username`,`email`,`password`) VALUES (?)'
        const values =[
            req.body.username,
            req.body.email,
            //password in HASH pattern
            hash,
        ]

        db.query(q,[values],(err,data)=>{
            if(err) 
                return res.json(err);
                return res.status(200).json('User has been created successfully!');    
        })
    });

};

export const login = (req, res) => {
    //check EXISTING USER
    const q = 'SELECT * FROM users WHERE username = ?';

    db.query(q,[req.body.username], (err,data)=>{
        //CHECK ERROR
        if(err) return res.json(err);
        if(data.length === 0) return res.status(404).json('User not found!');

        //CHECK PASSWORD:if correct
        const isPasswordCorrect = bcrypt.compareSync(req.body.password,data[0].password);
        //password if not Correct
        if(!isPasswordCorrect) return res.status(400).json('Wrong username or password');

        //after importing jwt jsonwebtoken above
        //INSTALL npm add jsonwebtoken in api
        //check the Stored ID in COOKIES and compare from application
     const token =  jwt.sign({id:data[0].id}, 'jwtkey');

     const {password, ...other} = data[0]

     //response COOKIE
     //INSTALL cookie using npm add cookie-parser
     //cookie Name:access_token
     res.cookie('access_token',token,{
        //only doing API request
        httpOnly:true
     }).status(200).json(other)


       

    })

};


export const logout = (req, res) => {

};

