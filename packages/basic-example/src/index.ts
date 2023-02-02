import express from 'express';
const Hello = express.Router()


Hello.get('/', (req, res) => {
  console.log(req.params);
  res.send('Hello World!');
})

Hello.post('/', (req, res) => {
  console.log(req.params);
  res.send('Hello World!');
})

export { Hello }
