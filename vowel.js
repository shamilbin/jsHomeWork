const express = require('express');
const app = express();
const port = 3000;


app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Define a  API 
app.get('/api', (req, res) => {
  res.json({ message: 'Welcome to the API!' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});


//
//
//
//


// Sample data (in-memory storage)
let users = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Doe' },
];

// GET /api/users - Get all users
app.get('/api/users', (req, res) => {
  res.json(users);
});

// POST /api/users - Create a new user
app.post('/api/users', (req, res) => {
  const newUser = req.body; // Get data from the request body
  users.push(newUser); // Add user to the array
  res.status(201).json(newUser); // Respond with the created user
});

// PUT /api/users/:id - Update a user by ID
app.put('/api/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const updatedUser = req.body;
  let user = users.find(u => u.id === userId);

  if (user) {
    user.name = updatedUser.name || user.name;
    res.json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

// DELETE /api/users/:id - Delete a user by ID
app.delete('/api/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  users = users.filter(u => u.id !== userId);
  res.status(204).send(); // No content after deletion
});
