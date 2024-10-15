// Import express
const express = require("express");
const app = express();

// Find port
require("dotenv").config(); 
const PORT = process.env.PORT || 3000;

// Add middleware
app.use(express.json());
const cors = require('cors')
app.use(cors());

// Connect to DB
const db = require("./config/database"); 
db.connection();

// Mount api route
const todo = require("./routes/TodoRouters");
app.use('/api/v1', todo);

// Activate server
app.listen(PORT, () => {
    console.log(`App is running at ${PORT}`);
}) 