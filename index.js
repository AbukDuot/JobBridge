import express from 'express';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Welcome to JobBridge!');
});

app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}`);
});
