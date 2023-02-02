/*
 * @Description: 
 * @Author: wsy
 * @Date: 2023-01-31 01:28:21
 * @LastEditTime: 2023-02-02 01:33:07
 * @LastEditors: wsy
 */
import express from 'express';
import typeis from 'type-is';

const app = express();
app.use(express.json({
  limit: '10MB',
}));

app.get('/', (req, res) => {
  console.log(typeis.hasBody(req));
  res.send('Hello World!');
})

app.listen(3000, () => {
  console.log('Server started on port 3000');
})

