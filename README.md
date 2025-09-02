# SMH-Connect Backend API

A robust REST API backend built with Node.js, Express, and MongoDB for the Smart HealthConnect platform.

## 🚀 Features

- User Authentication with JWT
- User Management (CRUD operations)
- Secure Password Hashing
- MongoDB Database Integration
- CORS Enabled
- Environment Variables Support
- **Comprehensive Swagger API Documentation**

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB with Mongoose
- JWT for Authentication
- bcrypt for Password Hashing
- CORS for Cross-Origin Resource Sharing
- dotenv for Environment Variables
- Swagger UI for API Documentation

## 📚 API Documentation

This project includes comprehensive Swagger/OpenAPI documentation for all endpoints.

### Access the Documentation:
- **Swagger UI**: http://localhost:3002/api-docs
- **Custom Documentation**: http://localhost:3002/docs
- **Raw JSON**: http://localhost:3002/swagger.json

### Features of the Documentation:
- Interactive API testing interface
- Complete endpoint documentation
- Request/response schemas
- Authentication examples
- Error response descriptions

## 📝 API Endpoints

### Authentication
- `POST /auth/login` - User login

### User Operations
- `POST /app/postUser` - Create a new user
- `GET /app/getUser` - Get all users
- `GET /app/getSpecificData/:UserId` - Get specific user details
- `PUT /app/updateUser/:UserId` - Update user information
- `DELETE /app/deleteUser/:UserId` - Delete a user

## 🔧 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/abdaloo/Dev-Hub-Backend.git
   cd Dev-Hub-Backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your MongoDB URI:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   ```

4. Start the server:
   ```bash
   node server.js
   ```

The server will start running on http://localhost:3002

## 🔒 Environment Variables

Make sure to set up the following environment variables in your `.env` file:

- `MONGODB_URI` - Your MongoDB connection string

## 📁 Project Structure

```
Dev-Hub-Backend/
├── config/
│   ├── api.js         # API configurations
│   └── db.js          # Database connection setup
├── controllers/
│   └── UserControllers2.js  # User operation controllers
├── models/
│   └── user.modal.js  # User data model
├── routes/
│   └── UserRouters.js # API routes
├── .env               # Environment variables
├── server.js         # Application entry point
└── package.json      # Project dependencies
```

## 🔐 Security

- Passwords are hashed using bcrypt
- JWT authentication for protected routes
- Environment variables for sensitive data
- CORS enabled for security

## 📄 License

ISC

## 🤝 Contributing

Feel free to open issues and pull requests!
