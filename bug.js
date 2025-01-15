const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

//Error: This code will work fine but might have a potential issue if the port is already in use by another process. This is a common error, but the handling might be uncommon