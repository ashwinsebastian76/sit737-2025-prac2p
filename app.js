const express = require('express');
const app = express();

app.use(express.static('public'));

// Route to serve the homepage
app.get('/', (req, res) => {
  res.send('Hello, Welcome to Ashwins simple Node.js webpage!');
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});