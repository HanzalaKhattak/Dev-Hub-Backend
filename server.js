import express from "express";
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import path from 'path';
import { fileURLToPath } from 'url';
import swaggerSpec from './appSwagger.js';
const app = express();

// Get __dirname equivalent for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Swagger JSON endpoint
app.get('/swagger.json', (req, res) => {
res.setHeader('Content-Type', 'application/json');
res.setHeader('Access-Control-Allow-Origin', '*');
res.send(swaggerSpec);
});

// Swagger UI route
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, {
customCss: '.swagger-ui .topbar { display: none }',
customSiteTitle: "SMH-Connect API Documentation",
}));

// const connectDB = require('./config/db'); // Using commonJS : old way
import connectDB from './config/db.js'; // modern way
import router from "./routes/UserRouters.js";
import { authRoute } from "./controllers/UserControllers2.js";
import { authmiddleware } from "./routes/authMiddleware.js";
// import authroute from "./routes/authRoute.js";

//Middleware
app.use(cors())
app.use(express.json()) //Send Data to DB
app.use(express.static('public')); // Serve static files from public directory

// Add error handling middleware
app.use((err, req, res, next) => {
    console.error('Error:', err.message);
    res.status(500).json({ 
        error: 'Internal Server Error',
        message: err.message 
    });
});

// Swagger UI route with custom HTML
app.get('/docs', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'swagger.html'));
});

app.use("/app",router)
app.use("/auth",authRoute)

// Root route - serve HTML landing page
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// API info endpoint (JSON)
app.get('/api-info',(req,res)=>{
    res.json({
        message: "Welcome to SMH-Connect API!",
        documentation: {
            swagger: "http://localhost:3002/api-docs",
            custom: "http://localhost:3002/docs",
            json: "http://localhost:3002/swagger.json"
        },
        endpoints: {
            users: "/app",
            auth: "/auth",
            protected: "/authmiddleware"
        }
    });
});

app.get("/authmiddleware",authmiddleware,(req,res)=>{
    console.log("User ID: ",req.user.userId);
    console.log("User Email: ",req.user.email);
    console.log("User Username: ",req.user.userName);
    res.json({
        message: "Access authorized",
        user: {
            userId: req.user.userId,
            email: req.user.email,
            userName: req.user.userName
        }
    });
})

//Defining route - commented out since we have a better root route above
// app.get('/',(req,res)=>{
//     res.send("Welcome to Backend Development");
// });

// Creating server on port 3002
app.listen(3002, async ()=>{
    console.log("Server start at port: http://localhost:3002");
    
    // Try to connect to database but don't crash if it fails
    try {
        await connectDB();
    } catch (error) {
        console.log("Database connection failed, but server is still running");
    }
    
    console.log("\n🚀 API Documentation available at:");
    console.log("📖 Swagger UI: http://localhost:3002/api-docs");
    console.log("🎨 Custom Docs: http://localhost:3002/docs");
    console.log("🏠 Home Page: http://localhost:3002");
    console.log("📋 JSON Spec: http://localhost:3002/swagger.json");
})

//  Base URL              Middle URL   EndPoint
// http://localhost:3002 /app/users   /getAllUser