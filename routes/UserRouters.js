import express from "express";
const router = express.Router();
import {createNewUser,getAllUser,deleteUser,updateUser,getSpecificData,authRoute} from "../controllers/UserControllers2.js";

//Create New Data:
/**
 * @swagger
 * /app/postUser:
 *   post:
 *     summary: Create a new user
 *     description: Registers a new user with a username, email, and password. The password is hashed before saving.
 *     tags:
 *       - Users
 *     requestBody:
 *       required: true
 *       description: User details needed to create an account
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - username
 *               - email
 *               - password
 *             properties:
 *               username:
 *                 type: string
 *                 example: johndoe
 *               email:
 *                 type: string
 *                 format: email
 *                 example: johndoe@example.com
 *               password:
 *                 type: string
 *                 format: password
 *                 example: strongPassword123
 *     responses:
 *       200:
 *         description: User created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 Message:
 *                   type: string
 *                   example: User Created Successfully
 *                 user:
 *                   $ref: '#/components/schemas/User'
 *       400:
 *         description: Missing required fields
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 warning:
 *                   type: string
 *                   example: All fields are required
 *       500:
 *         description: Internal server error
 */
router.post('/postUser',createNewUser); //For Data Creation

/**
 * @swagger
 * /app/getUser:
 *   get:
 *     summary: Get all users
 *     description: Retrieves a list of all registered users from the database.
 *     tags:
 *       - Users
 *     responses:
 *       200:
 *         description: Users retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 Message:
 *                   type: string
 *                   example: Data Found
 *                 Users:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/User'
 *       400:
 *         description: No users found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 Warning:
 *                   type: string
 *                   example: User not Found
 *       500:
 *         description: Internal server error
 */
router.get('/getUser',getAllUser); // For Getting Data

/**
 * @swagger
 * /app/deleteUser/{UserId}:
 *   delete:
 *     summary: Delete a user
 *     description: Deletes a user by their unique ID.
 *     tags:
 *       - Users
 *     parameters:
 *       - in: path
 *         name: UserId
 *         required: true
 *         description: The ID of the user to delete
 *         schema:
 *           type: string
 *           example: 64c8e9a4f6a4d5c8b3f0e123
 *     responses:
 *       200:
 *         description: User deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 msg:
 *                   type: string
 *                   example: User Successfully Deleted
 *                 user:
 *                   $ref: '#/components/schemas/User'
 *       404:
 *         description: User not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 wrn:
 *                   type: string
 *                   example: User not found
 *       500:
 *         description: Internal server error
 */
router.delete('/deleteUser/:UserId',deleteUser); // For Deleting Data

/**
 * @swagger
 * /app/updateUser/{UserId}:
 *   put:
 *     summary: Update a user
 *     description: Updates user details by their unique ID.
 *     tags:
 *       - Users
 *     parameters:
 *       - in: path
 *         name: UserId
 *         required: true
 *         description: The ID of the user to update
 *         schema:
 *           type: string
 *           example: 64c8e9a4f6a4d5c8b3f0e123
 *     requestBody:
 *       required: true
 *       description: The new user details to update
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 example: johndoe_updated
 *               email:
 *                 type: string
 *                 format: email
 *                 example: johndoe_updated@example.com
 *               password:
 *                 type: string
 *                 format: password
 *                 example: newStrongPassword123
 *     responses:
 *       200:
 *         description: User updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 msg:
 *                   type: string
 *                   example: User Successfully Updated
 *                 NewUser:
 *                   $ref: '#/components/schemas/User'
 *       404:
 *         description: User not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 wrn:
 *                   type: string
 *                   example: User not found
 *       500:
 *         description: Internal server error
 */
router.put('/updateUser/:UserId',updateUser); // For updating Data

/**
 * @swagger
 * /app/getSpecificData/{UserId}:
 *   get:
 *     summary: Get a specific user
 *     description: Retrieves details of a single user by their unique ID.
 *     tags:
 *       - Users
 *     parameters:
 *       - in: path
 *         name: UserId
 *         required: true
 *         description: The ID of the user to retrieve
 *         schema:
 *           type: string
 *           example: 64c8e9a4f6a4d5c8b3f0e123
 *     responses:
 *       200:
 *         description: User retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 msg:
 *                   type: string
 *                   example: User Successfully Found
 *                 NewUser:
 *                   $ref: '#/components/schemas/User'
 *       404:
 *         description: User not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 wrn:
 *                   type: string
 *                   example: User not found
 *       500:
 *         description: Internal server error
 */
router.get('/getSpecificData/:UserId',getSpecificData); // For Getting Specific Data

/**
 * @swagger
 * /app/login:
 *   post:
 *     summary: User login
 *     description: Authenticates a user with email and password, returning a JWT token if successful.
 *     tags:
 *       - Authentication
 *     requestBody:
 *       required: true
 *       description: User login credentials
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/LoginRequest'
 *     responses:
 *       200:
 *         description: Login successful, returns user details and JWT token
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 msg:
 *                   type: string
 *                   example: User Login SuccessFully
 *                 LoginUser:
 *                   $ref: '#/components/schemas/User'
 *                 User_Token:
 *                   type: string
 *                   example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
 *       400:
 *         description: Missing email or password
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 wrn:
 *                   type: string
 *                   example: Email Is Required
 *       401:
 *         description: Invalid email or user not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 wrn:
 *                   type: string
 *                   example: User Not Found or Invalid Email
 *       402:
 *         description: Incorrect password
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 wrn:
 *                   type: string
 *                   example: password is Incorrect
 *       500:
 *         description: Internal server error
 */
router.post('/login',authRoute); 


export default router
