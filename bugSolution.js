const express = require('express');
const app = express();
let port = 3000;

function startServer() {
  app.get('/', (req, res) => {
    res.send('Hello World!');
  });

  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  }).on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.error(`Port ${port} is already in use, trying port ${port + 1}`);
      port++;
      startServer(); // Try again with the next port
    } else {
      console.error(`Failed to start server:`, err);
    }
  });
}

startServer();