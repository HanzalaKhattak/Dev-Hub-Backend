
// appSwagger.js
import swaggerJsdoc from "swagger-jsdoc";
import path from "path";
const swaggerOptions = {
definition: {
openapi: "3.0.0",
info: {
title: "SMH-Connect API",
version: "1.0.0",
description: "Welcome to the Smart HealthConnect!\n\nThis interactive documentation provides a comprehensive overview of all endpoints.",
contact: {
name: "API Support",
email: "support@smhconnect.com"
}
},
servers: [
{
url: "http://localhost:3002",
description: "Development server"
}
],
components: {
schemas: {
User: {
type: "object",
required: ["username", "email", "password"],
properties: {
_id: {
type: "string",
description: "Auto-generated MongoDB ObjectId",
example: "64c8e9a4f6a4d5c8b3f0e123"
},
username: {
type: "string",
description: "User's unique username",
example: "johndoe"
},
email: {
type: "string",
format: "email",
description: "User's email address",
example: "johndoe@example.com"
},
password: {
type: "string",
format: "password",
description: "User's hashed password",
example: "$2b$10$..."
},
createdAt: {
type: "string",
format: "date-time",
description: "Account creation timestamp"
},
updatedAt: {
type: "string",
format: "date-time",
description: "Last update timestamp"
}
}
},
LoginRequest: {
type: "object",
required: ["email", "password"],
properties: {
email: {
type: "string",
format: "email",
example: "johndoe@example.com"
},
password: {
type: "string",
format: "password",
example: "strongPassword123"
}
}
},
Error: {
type: "object",
properties: {
message: {
type: "string",
description: "Error message"
},
status: {
type: "number",
description: "HTTP status code"
}
}
}
},
securitySchemes: {
bearerAuth: {
type: "http",
scheme: "bearer",
bearerFormat: "JWT"
}
}
}
},
// Reference actual route files
apis: [
"./routes/UserRouters.js",
"./routes/authRoute.js"
],
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);
export default swaggerSpec;