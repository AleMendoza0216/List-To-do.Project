const e = require('express');
const express = require('express');
const mongoose = require('mongoose')
const dotenv = require('dotenv')

const server = express();
const port =  4000;

dotenv.config();

mongoose
 .connect(process.env.MONGODB_URI) 
 .then(() => console.log('Conected to the Database'))
 .catch((err) =>
  console.log('Error connecting to the database, error: ' + err)
);

server.get('/', (request, response) => {
    response.send('Hello from the deepest level');
  });


server.listen(4000, () => {
    console.log(`Server running on local host in port ${port}`);
}); 