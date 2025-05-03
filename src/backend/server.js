// server.js
import express from  'express';
const app = express();
const PORT = 3000;

// Middleware to parse JSON (optional)
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
