//see here: https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction

const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public')); //will serve index.html if in public by default

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});
