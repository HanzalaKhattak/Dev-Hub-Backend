import User from "../models/user.modal.js";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken";
// import authroute from "../routes/authRoute.js";


export const createNewUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return res.status(400).json({ warning: "All fields are required" });
    }

    // Convert the password to cypher code.
    const hashpassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({ username, email, password: hashpassword });

    return res
      .status(200)
      .json({ Message: "User Created Successfully", user: newUser });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};


//Getting All data:
export const getAllUser = async(req,res) => {
    try {
        const allUser = await User.find();
        if(!allUser) return res.status(400).json({Warning: "User not Found"});

        res.status(200).json({Message: "Data Found", Users: allUser})
    } catch (error) {
        console.log(error)
    }
}

//Delete data:

export const deleteUser = async(req,res) => { 
  try {
    const User_id = req.params.UserId;
    const delete_User = await User.findByIdAndDelete(User_id);
    if(!deleteUser) return res.status(404).json({wrn: "User not found"});
    return res.status(200).json({msg: "User Successfully Deleted", user: delete_User});
  } catch (error) {
    console.log(error);
  }
}

//Update data:


export const updateUser = async(req,res) => {
  try {
    const user_Id = req.params.UserId;
    const update_User = await User.findByIdAndUpdate(user_Id,req.body,{new:true});
    if(!update_User)return res.status(404).json({wrn: "User not found"});
    return res.status(200).json({msg: "User Successfully Updated", NewUser: update_User});
  } catch (error) {
    console.log(error)
  }
}

//Get specific Data: 

export const getSpecificData = async(req,res) =>{
  try {
    const Find_User = req.params.UserId;
    const FindUser = await User.findOne({_id:Find_User})
    if(!FindUser)return res.status(404).json({wrn: "User not found"});
    return res.status(200).json({msg: "User Successfully Found", NewUser: FindUser});
  } catch (error) {
    console.log(error)
  }
}

//Login auth using JWT
export const authRoute  = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email) return res.status(400).json({ wrn: "Email Is Required" });
    if (!password) return res.status(400).json({ wrn: "password Is Required" });

    const find_User = await User.findOne({ email });
    if (!find_User) return res.status(401).json({ wrn: "User Not Found or Invalid Email" });

    
    const find_password = await bcrypt.compare(password, find_User.password);
    if (!find_password)
      return res.status(402).json({ wrn: "password is Incorrect" });

    const Login_User_token = await jwt.sign(
      {
        userId: find_User._id,
        userName: find_User.username,
        email: find_User.email,
      },
      "abcdefg692354%#$^8*",
      { expiresIn: "1d" }
    );
    
    return res
      .status(200)
      .json({ msg: "User Login SuccessFully", LoginUser: find_User,User_Token:Login_User_token });
  } catch (error) {
    console.log(error);
  }
};