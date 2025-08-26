import express from "express";
const router = express.Router();
import {createNewUser,getAllUser,deleteUser,updateUser,getSpecificData,authRoute} from "../controllers/UserControllers2.js";

// routes/UserRoute.js
/**
* @swagger
* components:
* schemas:
* User:
* type: object
* required:
* - name
* - email
* - password
* properties:
* id:
* type: string
* description: The user ID
* name:
* type: string
* description: User's full name
* email:
* type: string
* format: email
* description: User's email address
* password:
* type: string
* description: User's password
* example:
* id: 60c72b2f9b1e8e001c8e4b8a
* name: John Doe
* email: john@example.com
* password: hashedpassword
*/
router.post('/postUser',createNewUser); //For Data Creation
router.get('/getUser',getAllUser); // For Getting Data
router.delete('/deleteUser/:UserId',deleteUser); // For Deleting Data
router.put('/updateUser/:UserId',updateUser); // For updating Data
router.get('/getSpecificData/:UserId',getSpecificData); // For Getting Specific Data
router.post('/login',authRoute); 


export default router
