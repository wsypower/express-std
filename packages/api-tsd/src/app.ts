/*
 * @Description: 
 * @Author: wsy
 * @Date: 2023-01-31 01:28:21
 * @LastEditTime: 2023-01-31 01:37:56
 * @LastEditors: wsy
 */
import express from 'express';

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  console.log(req.body);
  res.send('Hello World!');
})

app.listen(3000, () => {
  console.log('Server started on port 3000');
})

