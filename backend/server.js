const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');

dotenv.config();

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;

// Connect to MongoDB
if (process.env.MONGO_URI && process.env.MONGO_URI !== 'your_mongo_db_connection_string_here') {
  mongoose.connect(process.env.MONGO_URI)
    .then(() => {
      console.log('Connected to MongoDB');
      app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
      });
    })
    .catch((err) => {
      console.error('Failed to connect to MongoDB', err);
    });
} else {
  console.log('MONGO_URI placeholder detected. Server will start but DB features will fail until a valid URI is provided.');
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT} without DB connection.`);
  });
}
