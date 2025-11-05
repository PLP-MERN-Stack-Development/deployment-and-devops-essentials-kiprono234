require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
const morgan = require('morgan');

const app = express();

// Middleware
app.use(helmet());
app.use(morgan('combined'));
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  maxPoolSize: 10,
})
.then(() => console.log(' MongoDB connected'))
.catch((err) => console.error(' MongoDB error:', err.message));

// Example route
app.get('/', (req, res) => {
  res.send('Backend API is running 🚀');
});

// Error handling
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
