const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
app.get('/ping', (req, res) => {
  res.json({ message: 'Connected!' });
});
const tasks = [
{ id: 1, title: 'Buy groceries' },
{ id: 2, title: 'Walk the dog' },
{ id: 3, title: 'Read a book' },
{ id: 4, title: 'Call the dentist' }
];
app.get('/tasks', (req, res) => {
  res.json(tasks);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
